import { Controller, Post, Body, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AuditsService } from '../service/audits.service.js';
import { AuditResponse } from '../interfaces/audit-response.interface.js';

@Controller('audits')
export class AuditsController {
  constructor(private readonly auditsService: AuditsService) {}

  @Post()
  async auditUrl(@Body('url') url: string) {
    try {
      const auditResult = await this.auditsService.auditUrl(url);
      return auditResult;
    } catch (error) {
      // Manejo de errores
      return { error: 'Error auditing URL', details: error.message };
    }
  }
  
  // Nuevo método para obtener todas las auditorías
  @Get()
  async getAllAudits(): Promise<AuditResponse[]> { // Cambia el tipo de retorno
    try {
      const audits = await this.auditsService.getAllAudits();
      return audits.map(audit => ({
        _id: audit._id.toString(),
        url: audit.url,
        performanceScore: audit.performanceScore,
        accessibilityScore: audit.accessibilityScore,
        seoScore: audit.seoScore,
        createdAt: audit.createdAt,
        reportId: audit.reportId,
      }));
    } catch (error) {
      throw new HttpException('Error fetching audits: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}