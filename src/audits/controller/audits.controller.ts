import { Controller, Post, Body } from '@nestjs/common';
import { AuditsService } from '../service/audits.service.js';

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
}
