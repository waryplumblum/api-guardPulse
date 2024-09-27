// audit-response.interface.ts
export interface AuditResponse {
    _id: string;
    url: string;
    performanceScore: number;
    accessibilityScore: number;
    seoScore: number;
    createdAt: Date;
    reportId: string;
  }
  