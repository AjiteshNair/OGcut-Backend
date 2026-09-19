import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'crypto';

interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
}

@Injectable()
export class RazorpayClient {
  constructor(private readonly config: ConfigService) {}

  private get keyId(): string {
    const key = this.config.get<string>('RAZORPAY_KEY_ID');
    if (!key) throw new Error('RAZORPAY_KEY_ID is not configured');
    return key;
  }

  private get keySecret(): string {
    const secret = this.config.get<string>('RAZORPAY_KEY_SECRET');
    if (!secret) throw new Error('RAZORPAY_KEY_SECRET is not configured');
    return secret;
  }

  /** Creates a Razorpay order for the given amount (in rupees) and returns its id. */
  async createOrder(amountInRupees: number, receipt: string): Promise<RazorpayOrderResponse> {
    const auth = Buffer.from(`${this.keyId}:${this.keySecret}`).toString('base64');

    const res = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: Math.round(amountInRupees * 100), // Razorpay expects paise
        currency: 'INR',
        receipt,
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body?.error?.description || 'Failed to create Razorpay order');
    }

    return res.json();
  }

  getPublicKeyId(): string {
    return this.keyId;
  }

  /** Verifies the signature Razorpay's checkout returns after a successful payment. */
  verifySignature(razorpayOrderId: string, razorpayPaymentId: string, signature: string): boolean {
    const expected = createHmac('sha256', this.keySecret)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest('hex');
    return expected === signature;
  }
}
