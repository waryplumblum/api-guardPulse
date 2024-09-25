import { Module } from '@nestjs/common';
import { AuditsService } from './service/audits.service.js';
import { AuditsController } from './controller/audits.controller.js';

import { MongooseModule } from '@nestjs/mongoose';
import { Audit, AuditSchema } from './schemas/audit.schema.js';
import { ReportsModule } from '../reports/reports.module.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Audit.name, schema: AuditSchema }]),
    ReportsModule
  ],
  providers: [AuditsService],
  controllers: [AuditsController],
})
export class AuditsModule {}
