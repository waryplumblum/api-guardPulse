import { Injectable } from '@nestjs/common';
import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import { ReportsService } from '../../reports/service/reports.service.js';

@Injectable()
export class AuditsService {

  constructor(private readonly reportsService: ReportsService) {}

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

    // Guardar el reporte en la base de datos
    const newReport = await this.reportsService.createReport(url, auditResult.reportDetails);

    // Retorna el resultado junto con el ID del nuevo reporte
    return {
      auditResult,
      reportId: newReport._id, // Devuelve el ID del nuevo reporte
    };
  }
}
