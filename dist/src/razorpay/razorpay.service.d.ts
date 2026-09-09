import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Razorpay from 'razorpay';
export declare class RazorpayService implements OnModuleInit {
    private configService;
    private razorpayInstance;
    constructor(configService: ConfigService);
    onModuleInit(): void;
    get instance(): Razorpay;
}
