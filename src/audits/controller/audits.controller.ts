import { Controller, Post, Body } from '@nestjs/common';
import { AuditsService } from '../service/audits.service.js';

@Controller('audits')
export class AuditsController {
  constructor(private readonly auditsService: AuditsService) {}

  @Post()
  async auditUrl(@Body('url') url: string) {
    const auditResult = await this.auditsService.auditUrl(url);
    return auditResult;
  }
}
