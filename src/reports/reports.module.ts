import { Module } from '@nestjs/common';
import { ReportsService } from './service/reports.service.js';
import { ReportsController } from './controller/reports.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from './schemas/report.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }])],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService],  
})
export class ReportsModule {}
