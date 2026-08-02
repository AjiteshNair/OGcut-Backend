import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private analyticsService;
    constructor(analyticsService: AnalyticsService);
    logPageView(dto: {
        sessionId: string;
        pagePath: string;
        userId?: string;
    }): Promise<{
        id: string;
        created_at: Date;
        user_id: string | null;
        session_id: string;
        page_path: string;
        duration_seconds: number;
    }>;
    updateDuration(dto: {
        pageViewId: string;
        durationSeconds: number;
    }): Promise<{
        id: string;
        created_at: Date;
        user_id: string | null;
        session_id: string;
        page_path: string;
        duration_seconds: number;
    }>;
}
