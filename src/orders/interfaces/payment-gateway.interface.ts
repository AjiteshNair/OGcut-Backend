export interface PaymentGatewayOrder {
  id: string;
  amount: number;
  currency: string;
}

export interface PaymentGatewayClient {
  /** Creates a gateway-side order for the given amount (in rupees) and returns its id. */
  createOrder(amountInRupees: number, receipt: string): Promise<PaymentGatewayOrder>;

  /** Verifies the signature the gateway's checkout returns after a successful payment. */
  verifySignature(gatewayOrderId: string, gatewayPaymentId: string, signature: string): boolean;

  /** The public key/id the frontend needs to open the gateway's checkout modal. */
  getPublicKeyId(): string;
}

/** DI token for PaymentGatewayClient — see orders.module.ts for the binding. */
export const PAYMENT_GATEWAY = Symbol('PAYMENT_GATEWAY');
