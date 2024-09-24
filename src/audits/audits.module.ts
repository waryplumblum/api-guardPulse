import { Module } from '@nestjs/common';
import { AuditsService } from './service/audits.service.js';
import { AuditsController } from './controller/audits.controller.js';

import { MongooseModule } from '@nestjs/mongoose';
import { Audit, AuditSchema } from './schemas/audit.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Audit.name, schema: AuditSchema }])],
  providers: [AuditsService],
  controllers: [AuditsController],
})
export class AuditsModule {}
