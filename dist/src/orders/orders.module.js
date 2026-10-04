"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const orders_controller_1 = require("./orders.controller");
const orders_service_1 = require("./orders.service");
const admin_orders_service_1 = require("./admin-orders.service");
const order_payments_service_1 = require("./order-payments.service");
const razorpay_client_1 = require("./razorpay.client");
const payment_gateway_interface_1 = require("./interfaces/payment-gateway.interface");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        controllers: [orders_controller_1.OrdersController],
        providers: [
            orders_service_1.OrdersService,
            admin_orders_service_1.AdminOrdersService,
            order_payments_service_1.OrderPaymentsService,
            razorpay_client_1.RazorpayClient,
            { provide: payment_gateway_interface_1.PAYMENT_GATEWAY, useExisting: razorpay_client_1.RazorpayClient },
        ],
        exports: [orders_service_1.OrdersService],
    })
], OrdersModule);
//# sourceMappingURL=orders.module.js.map