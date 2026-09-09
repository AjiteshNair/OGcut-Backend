// src/razorpay/razorpay.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Razorpay from 'razorpay';

@Injectable()
export class RazorpayService implements OnModuleInit {
  private razorpayInstance!: Razorpay;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.razorpayInstance = new Razorpay({
      key_id: this.configService.getOrThrow<string>('RAZORPAY_KEY_ID'),
      key_secret: this.configService.getOrThrow<string>('RAZORPAY_KEY_SECRET'),
    });
  }

  get instance(): Razorpay {
    return this.razorpayInstance;
  }
}