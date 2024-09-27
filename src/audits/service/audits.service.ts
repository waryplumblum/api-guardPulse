import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
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
    // Lanzar Puppeteer en modo headless
    const browser = await puppeteer.launch({
      headless: 'shell', // Ejecuta Chrome sin interfaz gráfica
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const { port } = new URL(browser.wsEndpoint());

    const options = {
      logLevel: 'info' as const,
      output: 'json' as const,
      onlyCategories: ['performance', 'accessibility', 'seo'],
      port: Number(port),
    };

    const runnerResult = await lighthouse(url, options);
    const report = runnerResult.lhr;

    await browser.close(); // Cierra el navegador Puppeteer

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
      savedAudit._id.toString(),
      auditResult.reportDetails
    );

    // **Actualizar la auditoría con el ID del reporte**
    savedAudit.reportId = newReport._id.toString();
    await savedAudit.save();

    return {
      auditResult,
      reportId: newReport._id.toString(), // Asegurarse de que el ID sea string
    };
  }

  // Nuevo método para obtener todas las auditorías
  async getAllAudits(): Promise<Audit[]> {
    return await this.auditModel.find().exec(); // Devuelve todas las auditorías
  }

}
