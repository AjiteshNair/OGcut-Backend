"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CartController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const cart_service_1 = require("./cart.service");
let CartController = CartController_1 = class CartController {
    cartService;
    logger = new common_1.Logger(CartController_1.name);
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addToCart(payload) {
        this.logger.log('--- Received POST /cart/add ---');
        this.logger.log(`Keys in payload: ${Object.keys(payload || {}).join(', ')}`);
        const order = await this.cartService.processAndSaveOrder(payload);
        return {
            success: true,
            orderId: order.id,
            order,
        };
    }
    async getAdminOrders(page, limit) {
        return this.cartService.getAdminOrders(page, limit);
    }
    async getAdminOrderById(id) {
        return this.cartService.getAdminOrderById(id);
    }
    async updateOrderStatus(id, status) {
        if (!status || !Object.values(client_1.OrderStatus).includes(status)) {
            throw new common_1.BadRequestException(`Invalid status. Must be one of: ${Object.values(client_1.OrderStatus).join(', ')}`);
        }
        return this.cartService.updateOrderStatus(id, status);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)('cart/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_service_1.CustomizationPayload]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Get)('admin/orders'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(20), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getAdminOrders", null);
__decorate([
    (0, common_1.Get)('admin/orders/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getAdminOrderById", null);
__decorate([
    (0, common_1.Patch)('admin/orders/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateOrderStatus", null);
exports.CartController = CartController = CartController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map