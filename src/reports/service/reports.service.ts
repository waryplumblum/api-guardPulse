import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from '../schemas/report.schema.js';

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Report.name) private reportModel: Model<Report>) {}

  async createReport(auditId: string, reportData: any): Promise<Report> {
    const newReport = new this.reportModel({ auditId, reportData });
    return await newReport.save();
  }

  async getReportById(id: string): Promise<Report | null> {
    return this.reportModel.findById(id).exec(); // Devuelve el reporte encontrado o null
  }

  async getAllReports(): Promise<Report[]> {
    return this.reportModel.find().exec(); // Devuelve todos los reportes
  }
}
