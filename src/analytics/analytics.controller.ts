// import { Controller, Post, Body, Patch } from '@nestjs/common';
// import { AnalyticsService } from './analytics.service';

// @Controller('analytics')
// export class AnalyticsController {
//   constructor(private analyticsService: AnalyticsService) {}

//   @Post('page-view')
//   logPageView(@Body() dto: { sessionId: string; pagePath: string; userId?: string }) {
//     return this.analyticsService.logPageView(dto);
//   }

//   @Patch('duration')
//   updateDuration(@Body() dto: { pageViewId: string; durationSeconds: number }) {
//     return this.analyticsService.updateDuration(dto);
//   }
// }