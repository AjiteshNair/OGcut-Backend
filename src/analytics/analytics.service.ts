import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async logPageView(dto: { sessionId: string; pagePath: string; userId?: string }) {
    return this.prisma.pageView.create({
      data: {
        session_id: dto.sessionId,
        page_path: dto.pagePath,
        user_id: dto.userId || null,
      },
    });
  }

  async updateDuration(dto: { pageViewId: string; durationSeconds: number }) {
    return this.prisma.pageView.update({
      where: { id: dto.pageViewId },
      data: {
        duration_seconds: dto.durationSeconds,
      },
    });
  }
}