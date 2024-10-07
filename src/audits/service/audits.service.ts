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
      // reportDetails: report.audits,
      reportDetails: {
        generalSettings: {
          Viewport: {
            'viewport': report.audits['viewport'],
          },
        },
        performance: {
          Accesskeys: {
            'largest-contentful-paint': report.audits['largest-contentful-paint'],
            'first-meaningful-paint': report.audits['first-meaningful-paint'],
            'speed-index': report.audits['speed-index'],
            'screenshot-thumbnails': report.audits['screenshot-thumbnails'],
            'final-screenshot': report.audits['final-screenshot'],
            'max-potential-fid': report.audits['max-potential-fid'],
            'interactive': report.audits['interactive'],
            'user-timings': report.audits['user-timings'],
            'critical-request-chains': report.audits['critical-request-chains'],
            'network-requests': report.audits['network-requests'],
            'network-rtt': report.audits['network-rtt'],
            'main-thread-tasks': report.audits['main-thread-tasks'],
            'lcp-lazy-loaded': report.audits['lcp-lazy-loaded'],
            'non-composited-animations': report.audits['non-composited-animations'],
            'prioritize-lcp-image': report.audits['prioritize-lcp-image'],
            'bf-cache': report.audits['bf-cache'],
            'script-treemap-data': report.audits['script-treemap-data'],
          },
          CumulativeLayoutShift: {
            'first-contentful-paint': report.audits['first-contentful-paint'],
            'total-blocking-time': report.audits['total-blocking-time'],
            'cumulative-layout-shift': report.audits['cumulative-layout-shift'],
            'network-server-latency': report.audits['network-server-latency'],
            'total-byte-weight': report.audits['total-byte-weight'],
            'metrics': report.audits['metrics'],
          },
          BootupTime: {
            'bootup-time': report.audits['bootup-time'],
          },
          UsesRelPreconnect: {
            'uses-rel-preconnect': report.audits['uses-rel-preconnect'],
          },
          LongTasks: {
            'long-tasks': report.audits['long-tasks'],
          },
          LargestContentfulPaintElement: {
            'largest-contentful-paint-element': report.audits['largest-contentful-paint-element'],
          },
          DuplicatedJavascript: {
            'offscreen-images': report.audits['offscreen-images'],
            'unminified-css': report.audits['unminified-css'],
            'unminified-javascript': report.audits['unminified-javascript'],
            'unused-css-rules': report.audits['unused-css-rules'],
            'unused-javascript': report.audits['unused-javascript'],
            'modern-image-formats': report.audits['modern-image-formats'],
            'uses-optimized-images': report.audits['uses-optimized-images'],
            'uses-text-compression': report.audits['uses-text-compression'],
            'uses-responsive-images': report.audits['uses-responsive-images'],
            'efficient-animated-content': report.audits['efficient-animated-content'],
            'duplicated-javascript': report.audits['duplicated-javascript'],
            'legacy-javascript': report.audits['legacy-javascript'],
          },
          Redirects: {
            'server-response-time': report.audits['server-response-time'],
            'redirects': report.audits['redirects'],
            'render-blocking-resources': report.audits['render-blocking-resources'],
            'uses-http2': report.audits['uses-http2'],
          },
          DOMSize: {
            'mainthread-work-breakdown': report.audits['mainthread-work-breakdown'],
            'uses-long-cache-ttl': report.audits['uses-long-cache-ttl'],
            'dom-size': report.audits['dom-size'],
          },
        },
        accessibility: {
          Accesskeys: {
            'font-display': report.audits['font-display'],
            'diagnostics': report.audits['diagnostics'],
            'layout-shifts': report.audits['layout-shifts'],
            'unsized-images': report.audits['unsized-images'],
            'accesskeys': report.audits['accesskeys'],
            'button-name': report.audits['button-name'],
            'bypass': report.audits['bypass'],
            'color-contrast': report.audits['color-contrast'],
            'definition-list': report.audits['definition-list'],
            'dlitem': report.audits['dlitem'],
            'document-title': report.audits['document-title'],
            'duplicate-id-aria': report.audits['duplicate-id-aria'],
            'empty-heading': report.audits['empty-heading'],
            'form-field-multiple-labels': report.audits['form-field-multiple-labels'],
            'frame-title': report.audits['frame-title'],
            'heading-order': report.audits['heading-order'],
            'html-has-lang': report.audits['html-has-lang'],
            'html-lang-valid': report.audits['html-lang-valid'],
            'html-xml-lang-mismatch': report.audits['html-xml-lang-mismatch'],
            'identical-links-same-purpose': report.audits['identical-links-same-purpose'],
            'image-alt': report.audits['image-alt'],
            'image-redundant-alt': report.audits['image-redundant-alt'],
            'input-button-name': report.audits['input-button-name'],
            'input-image-alt': report.audits['input-image-alt'],
            'label-content-name-mismatch': report.audits['label-content-name-mismatch'],
            'label': report.audits['label'],
            'landmark-one-main': report.audits['landmark-one-main'],
            'link-name': report.audits['link-name'],
            'link-in-text-block': report.audits['link-in-text-block'],
            'list': report.audits['list'],
            'listitem': report.audits['listitem'],
            'meta-refresh': report.audits['meta-refresh'],
            'meta-viewport': report.audits['meta-viewport'],
            'object-alt': report.audits['object-alt'],
            'select-name': report.audits['select-name'],
            'skip-link': report.audits['skip-link'],
            'tabindex': report.audits['tabindex'],
            'table-duplicate-name': report.audits['table-duplicate-name'],
            'table-fake-caption': report.audits['table-fake-caption'],
            'target-size': report.audits['target-size'],
            'td-has-header': report.audits['td-has-header'],
            'td-headers-attr': report.audits['td-headers-attr'],
            'th-has-data-cells': report.audits['th-has-data-cells'],
            'valid-lang': report.audits['valid-lang'],
            'video-caption': report.audits['video-caption'],
            'custom-controls-labels': report.audits['custom-controls-labels'],
            'custom-controls-roles': report.audits['custom-controls-roles'],
            'focus-traps': report.audits['focus-traps'],
            'focusable-controls': report.audits['focusable-controls'],
            'interactive-element-affordance': report.audits['interactive-element-affordance'],
            'logical-tab-order': report.audits['logical-tab-order'],
            'managed-focus': report.audits['managed-focus'],
            'offscreen-content-hidden': report.audits['offscreen-content-hidden'],
            'use-landmarks': report.audits['use-landmarks'],
            'visual-order-follows-dom': report.audits['visual-order-follows-dom'],
            'no-document-write': report.audits['no-document-write'],
            'uses-passive-event-listeners': report.audits['uses-passive-event-listeners'],
            'link-text': report.audits['link-text'],

          },
          ARIA: {
            'aria-allowed-attr': report.audits['aria-allowed-attr'],
            'aria-allowed-role': report.audits['aria-allowed-role'],
            'aria-command-name': report.audits['aria-command-name'],
            'aria-conditional-attr': report.audits['aria-conditional-attr'],
            'aria-deprecated-role': report.audits['aria-deprecated-role'],
            'aria-dialog-name': report.audits['aria-dialog-name'],
            'aria-hidden-body': report.audits['aria-hidden-body'],
            'aria-hidden-focus': report.audits['aria-hidden-focus'],
            'aria-input-field-name': report.audits['aria-input-field-name'],
            'aria-meter-name': report.audits['aria-meter-name'],
            'aria-progressbar-name': report.audits['aria-progressbar-name'],
            'aria-prohibited-attr': report.audits['aria-prohibited-attr'],
            'aria-required-attr': report.audits['aria-required-attr'],
            'aria-required-children': report.audits['aria-required-children'],
            'aria-required-parent': report.audits['aria-required-parent'],
            'aria-roles': report.audits['aria-roles'],
            'aria-text': report.audits['aria-text'],
            'aria-toggle-field-name': report.audits['aria-toggle-field-name'],
            'aria-tooltip-name': report.audits['aria-tooltip-name'],
            'aria-treeitem-name': report.audits['aria-treeitem-name'],
            'aria-valid-attr-value': report.audits['aria-valid-attr-value'],
            'aria-valid-attr': report.audits['aria-valid-attr'],

          },
        },
        seo: {
          Accesskeys: {
            'meta-description': report.audits['meta-description'],
            'http-status-code': report.audits['http-status-code'],
            'canonical': report.audits['canonical'],
            'robots-txt': report.audits['robots-txt'],
            'hreflang': report.audits['hreflang'],
            'is-crawlable': report.audits['is-crawlable'],
            'crawlable-anchors': report.audits['crawlable-anchors'],
            'structured-data': report.audits['structured-data'],
            'resource-summary': report.audits['resource-summary'],
            'third-party-summary': report.audits['third-party-summary'],
            'third-party-facades': report.audits['third-party-facades'],
          },
        },
      },
    }

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
