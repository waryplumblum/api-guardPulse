import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditsService {
  async auditUrl(url: string): Promise<any> {
    // Importación dinámica de chrome-launcher
    const chromeLauncher = (await import('chrome-launcher')).default;

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });

    const options = {
      logLevel: 'info' as const,
      output: 'json' as const,
      onlyCategories: ['performance', 'accessibility', 'seo'],
      port: chrome.port,
    };

    // Importación dinámica de lighthouse
    const lighthouse = (await import('lighthouse')).default;

    const runnerResult = await lighthouse(url, options);

    const report = runnerResult.lhr;

    await chrome.kill();

    return {
      performance: report.categories.performance.score * 100,
      accessibility: report.categories.accessibility.score * 100,
      seo: report.categories.seo.score * 100,
      reportDetails: report.audits,
    };
  }
}
