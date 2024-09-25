import { Injectable } from '@nestjs/common';
import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Audit } from '../schemas/audit.schema.js';
import { ReportsService } from '../../reports/service/reports.service.js';

@Injectable()
export class AuditsService {
  constructor(
    @InjectModel(Audit.name) private auditModel: Model<Audit>, 
    private readonly reportsService: ReportsService
  ) {}

  async auditUrl(url: string): Promise<any> {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

    const options = {
      logLevel: 'info' as const,
      output: 'json' as const,
      onlyCategories: ['performance', 'accessibility', 'seo'],
      port: chrome.port,
    };

    const runnerResult = await lighthouse(url, options);
    const report = runnerResult.lhr;

    await chrome.kill();

    const auditResult = {
      performance: report.categories.performance.score * 100,
      accessibility: report.categories.accessibility.score * 100,
      seo: report.categories.seo.score * 100,
      reportDetails: report.audits,
    };

    // **Guardar la auditoría en la base de datos**
    const newAudit = new this.auditModel({
      url,
      seoScore: auditResult.seo,
      performanceScore: auditResult.performance,
      accessibilityScore: auditResult.accessibility,
    });

    const savedAudit = await newAudit.save();

    // **Crear el reporte en la base de datos, pasando el ID de la auditoría como string**
    const newReport = await this.reportsService.createReport(
      savedAudit._id.toString(),  // Castear el ID a string
      auditResult.reportDetails
    );

    // **Actualizar la auditoría con el ID del reporte**
    savedAudit.reportId = newReport._id.toString(); // Castear el ID a string
    await savedAudit.save();

    return {
      auditResult,
      reportId: newReport._id.toString(), // Asegurarse de que el ID sea string
    };
  }
}
