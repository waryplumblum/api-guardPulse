import { Controller, Post, Get, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ReportsService } from '../service/reports.service.js';
import { Report } from '../schemas/report.schema.js';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  async createReport(@Body() createReportDto: { auditId: string; reportData: any }) {
    const { auditId, reportData } = createReportDto;
    try {
      const newReport = await this.reportsService.createReport(auditId, reportData);
      return newReport;
    } catch (error) {
      // Lanzar una excepción en caso de error
      throw new InternalServerErrorException('Error creating report', error.message);
    }
  }

  @Get(':id')
  async getReportById(@Param('id') id: string): Promise<Report> {
    try {
      const report = await this.reportsService.getReportById(id);
      if (!report) {
        throw new NotFoundException('Report not found');
      }
      return report;
    } catch (error) {
      // Lanzar una excepción en caso de error
      throw new InternalServerErrorException('Error fetching report', error.message);
    }
  }

  @Get()
  async getAllReports(): Promise<Report[]> {
    try {
      const reports = await this.reportsService.getAllReports();
      return reports;
    } catch (error) {
      // Lanzar una excepción en caso de error
      throw new InternalServerErrorException('Error fetching reports', error.message);
    }
  }
}
