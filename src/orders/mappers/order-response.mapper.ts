import { BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

// Customer-facing order queries (getUserOrders, getOrderById) — includes
// product images for display, no user relation (already scoped by uid).
export const CUSTOMER_ORDER_INCLUDE: Prisma.OrderInclude = {
  items: {
    include: {
      product: { include: { images: { take: 1 } } },
      placements: true,
    },
  },
};

// Admin-facing order queries — includes the customer's contact details,
// no product images (admin views don't need them).
export const ADMIN_ORDER_INCLUDE: Prisma.OrderInclude = {
  user: {
    select: { id: true, firstName: true, lastName: true, email: true, phone: true },
  },
  items: {
    include: {
      product: { select: { id: true, name: true, type: true } },
      placements: true,
    },
  },
};

interface OrderItemLike {
  unitPrice: unknown;
  [key: string]: unknown;
}

interface OrderLike {
  totalAmount: unknown;
  items: OrderItemLike[];
  [key: string]: unknown;
}

/** Converts Prisma's Decimal fields (totalAmount, unitPrice) to plain numbers for JSON responses. */
export function toOrderResponse<T extends OrderLike>(order: T) {
  return {
    ...order,
    totalAmount: Number(order.totalAmount),
    items: order.items.map((item) => ({
      ...item,
      unitPrice: Number(item.unitPrice),
    })),
  };
}

/** Parses a route param expected to be a numeric order id, or throws a 400. */
export function parseOrderId(id: string): number {
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    throw new BadRequestException('Invalid order ID provided');
  }
  return numericId;
}
