export interface ReportDetails {
    generalSettings :{
        Viewport: {
            viewport:                           Viewport; // Información sobre el viewport
        }
    };
    performance : {
        Accesskeys: {
            "largest-contentful-paint":         Accesskeys; // Métrica de rendimiento
            "first-meaningful-paint":           Accesskeys; // Métrica de rendimiento
            "speed-index":                      Accesskeys; // Métrica de rendimiento
            "screenshot-thumbnails":            Accesskeys; // Métrica de rendimiento
            "final-screenshot":                 Accesskeys; // Métrica de rendimiento
            "max-potential-fid":                Accesskeys; // Métrica de rendimiento
            interactive:                        Accesskeys; // Métrica de rendimiento
            "user-timings":                     Accesskeys; // Métrica de rendimiento
            "critical-request-chains":          Accesskeys; // Métrica de rendimiento
            "network-requests":                 Accesskeys; // Métrica de rendimiento
            "network-rtt":                      Accesskeys; // Métrica de rendimiento
            "main-thread-tasks":                Accesskeys; // Métrica de rendimiento
            "lcp-lazy-loaded":                  Accesskeys; // Métrica de rendimiento
            "non-composited-animations":        Accesskeys; // Métrica de rendimiento
            "prioritize-lcp-image":             Accesskeys; // Métrica de rendimiento
            "bf-cache":                         Accesskeys; // Accesibilidad
            "script-treemap-data":              Accesskeys; // Accesibilidad
        };
        CumulativeLayoutShift : {
            "first-contentful-paint":           CumulativeLayoutShift; // Métrica de rendimiento
            "total-blocking-time":              CumulativeLayoutShift; // Métrica de rendimiento
            "cumulative-layout-shift":          CumulativeLayoutShift; // Métrica de rendimiento
            "network-server-latency":           CumulativeLayoutShift; // Métrica de rendimiento
            "total-byte-weight":                CumulativeLayoutShift; // Métrica de rendimiento
            metrics:                            CumulativeLayoutShift; // Métrica de rendimiento
        };
        BootupTime : {
            "bootup-time":                      BootupTime; // Métrica de rendimiento
        };
        UsesRelPreconnect : {
            "uses-rel-preconnect":              UsesRelPreconnect; // Mejora de rendimiento
        };
        LongTasks : {
            "long-tasks":                       LongTasks; // Métrica de rendimiento
        };
        LargestContentfulPaintElement:{
            "largest-contentful-paint-element": LargestContentfulPaintElement; // Métrica de rendimiento
        };
        DuplicatedJavascript:{
            "offscreen-images":                 DuplicatedJavascript; // Información de duplicación de JavaScript
            "unminified-css":                   DuplicatedJavascript; // Información de duplicación de JavaScript
            "unminified-javascript":            DuplicatedJavascript; // Información de duplicación de JavaScript
            "unused-css-rules":                 DuplicatedJavascript; // Información de duplicación de JavaScript
            "unused-javascript":                DuplicatedJavascript; // Información de duplicación de JavaScript
            "modern-image-formats":             DuplicatedJavascript; // Información de duplicación de JavaScript
            "uses-optimized-images":            DuplicatedJavascript; // Información de duplicación de JavaScript
            "uses-text-compression":            DuplicatedJavascript; // Información de duplicación de JavaScript
            "uses-responsive-images":           DuplicatedJavascript; // Información de duplicación de JavaScript
            "efficient-animated-content":       DuplicatedJavascript; // Información de duplicación de JavaScript
            "duplicated-javascript":            DuplicatedJavascript; // Información de duplicación de JavaScript
            "legacy-javascript":                DuplicatedJavascript; // Información de duplicación de JavaScript
        };
        Redirects:{
            "server-response-time":             Redirects; // Información sobre redirecciones
            redirects:                          Redirects; // Información sobre redirecciones
            "render-blocking-resources":        Redirects; // Información sobre redirecciones
            "uses-http2":                       Redirects; // Información sobre redirecciones
        };
        DOMSize : {
            "mainthread-work-breakdown":        DOMSize; // Información sobre el tamaño del DOM
            "uses-long-cache-ttl":              DOMSize; // Información sobre el tamaño del DOM
            "dom-size":                         DOMSize; // Información sobre el tamaño del DOM
        };
    };
    accessibility : {
        Accesskeys : {
            "font-display":                     Accesskeys; // Accesibilidad
            diagnostics:                        Accesskeys; // Accesibilidad
            "layout-shifts":                    Accesskeys; // Accesibilidad
            "unsized-images":                   Accesskeys; // Accesibilidad
            accesskeys:                         Accesskeys; // Accesibilidad
            "button-name":                      Accesskeys; // Accesibilidad
            bypass:                             Accesskeys; // Accesibilidad
            "color-contrast":                   Accesskeys; // Accesibilidad
            "definition-list":                  Accesskeys; // Accesibilidad
            dlitem:                             Accesskeys; // Accesibilidad
            "document-title":                   Accesskeys; // Accesibilidad
            "duplicate-id-aria":                Accesskeys; // Accesibilidad
            "empty-heading":                    Accesskeys; // Accesibilidad
            "form-field-multiple-labels":       Accesskeys; // Accesibilidad
            "frame-title":                      Accesskeys; // Accesibilidad
            "heading-order":                    Accesskeys; // Accesibilidad
            "html-has-lang":                    Accesskeys; // Accesibilidad
            "html-lang-valid":                  Accesskeys; // Accesibilidad
            "html-xml-lang-mismatch":           Accesskeys; // Accesibilidad
            "identical-links-same-purpose":     Accesskeys; // Accesibilidad
            "image-alt":                        Accesskeys; // Accesibilidad
            "image-redundant-alt":              Accesskeys; // Accesibilidad
            "input-button-name":                Accesskeys; // Accesibilidad
            "input-image-alt":                  Accesskeys; // Accesibilidad
            "label-content-name-mismatch":      Accesskeys; // Accesibilidad
            label:                              Accesskeys; // Accesibilidad
            "landmark-one-main":                Accesskeys; // Accesibilidad
            "link-name":                        Accesskeys; // Accesibilidad
            "link-in-text-block":               Accesskeys; // Accesibilidad
            list:                               Accesskeys; // Accesibilidad
            listitem:                           Accesskeys; // Accesibilidad
            "meta-refresh":                     Accesskeys; // Accesibilidad
            "meta-viewport":                    Accesskeys; // Accesibilidad
            "object-alt":                       Accesskeys; // Accesibilidad
            "select-name":                      Accesskeys; // Accesibilidad
            "skip-link":                        Accesskeys; // Accesibilidad
            tabindex:                           Accesskeys; // Accesibilidad
            "table-duplicate-name":             Accesskeys; // Accesibilidad
            "table-fake-caption":               Accesskeys; // Accesibilidad
            "target-size":                      Accesskeys; // Accesibilidad
            "td-has-header":                    Accesskeys; // Accesibilidad
            "td-headers-attr":                  Accesskeys; // Accesibilidad
            "th-has-data-cells":                Accesskeys; // Accesibilidad
            "valid-lang":                       Accesskeys; // Accesibilidad
            "video-caption":                    Accesskeys; // Accesibilidad
            "custom-controls-labels":           Accesskeys; // Accesibilidad
            "custom-controls-roles":            Accesskeys; // Accesibilidad
            "focus-traps":                      Accesskeys; // Accesibilidad
            "focusable-controls":               Accesskeys; // Accesibilidad
            "interactive-element-affordance":   Accesskeys; // Accesibilidad
            "logical-tab-order":                Accesskeys; // Accesibilidad
            "managed-focus":                    Accesskeys; // Accesibilidad
            "offscreen-content-hidden":         Accesskeys; // Accesibilidad
            "use-landmarks":                    Accesskeys; // Accesibilidad
            "visual-order-follows-dom":         Accesskeys; // Accesibilidad
            "no-document-write":                Accesskeys; // Accesibilidad
            "uses-passive-event-listeners":     Accesskeys; // Accesibilidad
            "link-text":                        Accesskeys; // Accesibilidad
        };
        ARIA :{
            "aria-allowed-attr":                Accesskeys; // Accesibilidad
            "aria-allowed-role":                Accesskeys; // Accesibilidad
            "aria-command-name":                Accesskeys; // Accesibilidad
            "aria-conditional-attr":            Accesskeys; // Accesibilidad
            "aria-deprecated-role":             Accesskeys; // Accesibilidad
            "aria-dialog-name":                 Accesskeys; // Accesibilidad
            "aria-hidden-body":                 Accesskeys; // Accesibilidad
            "aria-hidden-focus":                Accesskeys; // Accesibilidad
            "aria-input-field-name":            Accesskeys; // Accesibilidad
            "aria-meter-name":                  Accesskeys; // Accesibilidad
            "aria-progressbar-name":            Accesskeys; // Accesibilidad
            "aria-prohibited-attr":             Accesskeys; // Accesibilidad
            "aria-required-attr":               Accesskeys; // Accesibilidad
            "aria-required-children":           Accesskeys; // Accesibilidad
            "aria-required-parent":             Accesskeys; // Accesibilidad
            "aria-roles":                       Accesskeys; // Accesibilidad
            "aria-text":                        Accesskeys; // Accesibilidad
            "aria-toggle-field-name":           Accesskeys; // Accesibilidad
            "aria-tooltip-name":                Accesskeys; // Accesibilidad
            "aria-treeitem-name":               Accesskeys; // Accesibilidad
            "aria-valid-attr-value":            Accesskeys; // Accesibilidad
            "aria-valid-attr":                  Accesskeys; // Accesibilidad
        };
    };
    seo : {
        Accesskeys : {
            "meta-description":                 Accesskeys; // Accesibilidad
            "http-status-code":                 Accesskeys; // Accesibilidad
            canonical:                          Accesskeys; // Accesibilidad
            "robots-txt":                       Accesskeys; // Accesibilidad
            hreflang:                           Accesskeys; // Accesibilidad
            "is-crawlable":                     Accesskeys; // Accesibilidad
            "crawlable-anchors":                Accesskeys; // Accesibilidad
            "structured-data":                  Accesskeys; // Accesibilidad
            "resource-summary":                 Accesskeys; // Resumen de recursos
            "third-party-summary":              Accesskeys; // Resumen de terceros
            "third-party-facades":              Accesskeys; // Información de terceros
        };
    };
}

/*
export interface ReportDetails {
    viewport:                           Viewport; // Información sobre el viewport
    "first-contentful-paint":           CumulativeLayoutShift; // Métrica de rendimiento
    "largest-contentful-paint":         Accesskeys; // Métrica de rendimiento
    "first-meaningful-paint":           Accesskeys; // Métrica de rendimiento
    "speed-index":                      Accesskeys; // Métrica de rendimiento
    "screenshot-thumbnails":            Accesskeys; // Métrica de rendimiento
    "final-screenshot":                 Accesskeys; // Métrica de rendimiento
    "total-blocking-time":              CumulativeLayoutShift; // Métrica de rendimiento
    "max-potential-fid":                Accesskeys; // Métrica de rendimiento
    "cumulative-layout-shift":          CumulativeLayoutShift; // Métrica de rendimiento
    "server-response-time":             Redirects; // Información sobre redirecciones
    interactive:                        Accesskeys; // Métrica de rendimiento
    "user-timings":                     Accesskeys; // Métrica de rendimiento
    "critical-request-chains":          Accesskeys; // Métrica de rendimiento
    redirects:                          Redirects; // Información sobre redirecciones
    "mainthread-work-breakdown":        DOMSize; // Información sobre el tamaño del DOM
    "bootup-time":                      BootupTime; // Métrica de rendimiento
    "uses-rel-preconnect":              UsesRelPreconnect; // Mejora de rendimiento
    "font-display":                     Accesskeys; // Accesibilidad
    diagnostics:                        Accesskeys; // Accesibilidad
    "network-requests":                 Accesskeys; // Métrica de rendimiento
    "network-rtt":                      Accesskeys; // Métrica de rendimiento
    "network-server-latency":           CumulativeLayoutShift; // Métrica de rendimiento
    "main-thread-tasks":                Accesskeys; // Métrica de rendimiento
    metrics:                            CumulativeLayoutShift; // Métrica de rendimiento
    "resource-summary":                 Accesskeys; // Resumen de recursos
    "third-party-summary":              Accesskeys; // Resumen de terceros
    "third-party-facades":              Accesskeys; // Información de terceros
    "largest-contentful-paint-element": LargestContentfulPaintElement; // Métrica de rendimiento
    "lcp-lazy-loaded":                  Accesskeys; // Métrica de rendimiento
    "layout-shifts":                    Accesskeys; // Accesibilidad
    "long-tasks":                       LongTasks; // Métrica de rendimiento
    "non-composited-animations":        Accesskeys; // Métrica de rendimiento
    "unsized-images":                   Accesskeys; // Accesibilidad
    "prioritize-lcp-image":             Accesskeys; // Métrica de rendimiento
    "script-treemap-data":              Accesskeys; // Accesibilidad
    accesskeys:                         Accesskeys; // Accesibilidad
    "aria-allowed-attr":                Accesskeys; // Accesibilidad
    "aria-allowed-role":                Accesskeys; // Accesibilidad
    "aria-command-name":                Accesskeys; // Accesibilidad
    "aria-conditional-attr":            Accesskeys; // Accesibilidad
    "aria-deprecated-role":             Accesskeys; // Accesibilidad
    "aria-dialog-name":                 Accesskeys; // Accesibilidad
    "aria-hidden-body":                 Accesskeys; // Accesibilidad
    "aria-hidden-focus":                Accesskeys; // Accesibilidad
    "aria-input-field-name":            Accesskeys; // Accesibilidad
    "aria-meter-name":                  Accesskeys; // Accesibilidad
    "aria-progressbar-name":            Accesskeys; // Accesibilidad
    "aria-prohibited-attr":             Accesskeys; // Accesibilidad
    "aria-required-attr":               Accesskeys; // Accesibilidad
    "aria-required-children":           Accesskeys; // Accesibilidad
    "aria-required-parent":             Accesskeys; // Accesibilidad
    "aria-roles":                       Accesskeys; // Accesibilidad
    "aria-text":                        Accesskeys; // Accesibilidad
    "aria-toggle-field-name":           Accesskeys; // Accesibilidad
    "aria-tooltip-name":                Accesskeys; // Accesibilidad
    "aria-treeitem-name":               Accesskeys; // Accesibilidad
    "aria-valid-attr-value":            Accesskeys; // Accesibilidad
    "aria-valid-attr":                  Accesskeys; // Accesibilidad
    "button-name":                      Accesskeys; // Accesibilidad
    bypass:                             Accesskeys; // Accesibilidad
    "color-contrast":                   Accesskeys; // Accesibilidad
    "definition-list":                  Accesskeys; // Accesibilidad
    dlitem:                             Accesskeys; // Accesibilidad
    "document-title":                   Accesskeys; // Accesibilidad
    "duplicate-id-aria":                Accesskeys; // Accesibilidad
    "empty-heading":                    Accesskeys; // Accesibilidad
    "form-field-multiple-labels":       Accesskeys; // Accesibilidad
    "frame-title":                      Accesskeys; // Accesibilidad
    "heading-order":                    Accesskeys; // Accesibilidad
    "html-has-lang":                    Accesskeys; // Accesibilidad
    "html-lang-valid":                  Accesskeys; // Accesibilidad
    "html-xml-lang-mismatch":           Accesskeys; // Accesibilidad
    "identical-links-same-purpose":     Accesskeys; // Accesibilidad
    "image-alt":                        Accesskeys; // Accesibilidad
    "image-redundant-alt":              Accesskeys; // Accesibilidad
    "input-button-name":                Accesskeys; // Accesibilidad
    "input-image-alt":                  Accesskeys; // Accesibilidad
    "label-content-name-mismatch":      Accesskeys; // Accesibilidad
    label:                              Accesskeys; // Accesibilidad
    "landmark-one-main":                Accesskeys; // Accesibilidad
    "link-name":                        Accesskeys; // Accesibilidad
    "link-in-text-block":               Accesskeys; // Accesibilidad
    list:                               Accesskeys; // Accesibilidad
    listitem:                           Accesskeys; // Accesibilidad
    "meta-refresh":                     Accesskeys; // Accesibilidad
    "meta-viewport":                    Accesskeys; // Accesibilidad
    "object-alt":                       Accesskeys; // Accesibilidad
    "select-name":                      Accesskeys; // Accesibilidad
    "skip-link":                        Accesskeys; // Accesibilidad
    tabindex:                           Accesskeys; // Accesibilidad
    "table-duplicate-name":             Accesskeys; // Accesibilidad
    "table-fake-caption":               Accesskeys; // Accesibilidad
    "target-size":                      Accesskeys; // Accesibilidad
    "td-has-header":                    Accesskeys; // Accesibilidad
    "td-headers-attr":                  Accesskeys; // Accesibilidad
    "th-has-data-cells":                Accesskeys; // Accesibilidad
    "valid-lang":                       Accesskeys; // Accesibilidad
    "video-caption":                    Accesskeys; // Accesibilidad
    "custom-controls-labels":           Accesskeys; // Accesibilidad
    "custom-controls-roles":            Accesskeys; // Accesibilidad
    "focus-traps":                      Accesskeys; // Accesibilidad
    "focusable-controls":               Accesskeys; // Accesibilidad
    "interactive-element-affordance":   Accesskeys; // Accesibilidad
    "logical-tab-order":                Accesskeys; // Accesibilidad
    "managed-focus":                    Accesskeys; // Accesibilidad
    "offscreen-content-hidden":         Accesskeys; // Accesibilidad
    "use-landmarks":                    Accesskeys; // Accesibilidad
    "visual-order-follows-dom":         Accesskeys; // Accesibilidad
    "uses-long-cache-ttl":              DOMSize; // Información sobre el tamaño del DOM
    "total-byte-weight":                CumulativeLayoutShift; // Métrica de rendimiento
    "offscreen-images":                 DuplicatedJavascript; // Información de duplicación de JavaScript
    "render-blocking-resources":        Redirects; // Información sobre redirecciones
    "unminified-css":                   DuplicatedJavascript; // Información de duplicación de JavaScript
    "unminified-javascript":            DuplicatedJavascript; // Información de duplicación de JavaScript
    "unused-css-rules":                 DuplicatedJavascript; // Información de duplicación de JavaScript
    "unused-javascript":                DuplicatedJavascript; // Información de duplicación de JavaScript
    "modern-image-formats":             DuplicatedJavascript; // Información de duplicación de JavaScript
    "uses-optimized-images":            DuplicatedJavascript; // Información de duplicación de JavaScript
    "uses-text-compression":            DuplicatedJavascript; // Información de duplicación de JavaScript
    "uses-responsive-images":           DuplicatedJavascript; // Información de duplicación de JavaScript
    "efficient-animated-content":       DuplicatedJavascript; // Información de duplicación de JavaScript
    "duplicated-javascript":            DuplicatedJavascript; // Información de duplicación de JavaScript
    "legacy-javascript":                DuplicatedJavascript; // Información de duplicación de JavaScript
    "dom-size":                         DOMSize; // Información sobre el tamaño del DOM
    "no-document-write":                Accesskeys; // Accesibilidad
    "uses-http2":                       Redirects; // Información sobre redirecciones
    "uses-passive-event-listeners":     Accesskeys; // Accesibilidad
    "meta-description":                 Accesskeys; // Accesibilidad
    "http-status-code":                 Accesskeys; // Accesibilidad
    "link-text":                        Accesskeys; // Accesibilidad
    "crawlable-anchors":                Accesskeys; // Accesibilidad
    "is-crawlable":                     Accesskeys; // Accesibilidad
    "robots-txt":                       Accesskeys; // Accesibilidad
    hreflang:                           Accesskeys; // Accesibilidad
    canonical:                          Accesskeys; // Accesibilidad
    "structured-data":                  Accesskeys; // Accesibilidad
    "bf-cache":                         Accesskeys; // Accesibilidad
}
*/
export interface Accesskeys {
    id:               string;           // Identificador único del acceso
    title:            string;           // Título del acceso
    description:      string;           // Descripción del acceso
    score:            number | null;    // Puntuación del acceso (puede ser nula)
    scoreDisplayMode: ScoreDisplayMode; // Modo de visualización de la puntuación
    details?:         AccesskeysDetails; // Detalles adicionales sobre el acceso
    guidanceLevel?:   number;           // Nivel de orientación del acceso
    displayValue?:    string;           // Valor a mostrar para el acceso
    warnings?:        any[];            // Advertencias relacionadas con el acceso
    numericValue?:    number;           // Valor numérico asociado al acceso
    numericUnit?:     NumericUnit;      // Unidad del valor numérico
    scoringOptions?:  ScoringOptions;   // Opciones de puntuación
    metricSavings?:   AccesskeysMetricSavings; // Ahorros de métricas asociados al acceso
}

export interface AccesskeysDetails {
    type:             DebugDataType;    // Tipo de datos de depuración
    headings?:        Heading[];         // Encabezados asociados
    items?:           PurpleItem[];      // Elementos relacionados con el acceso
    debugData?:       ItemDebugData;     // Datos de depuración
    chains?:          Chains;            // Cadenas de acceso
    longestChain?:    LongestChain;      // Cadena más larga
    timing?:          number;            // Tiempo asociado
    timestamp?:       number;            // Marca de tiempo
    data?:            string;            // Datos adicionales
    sortedBy?:        string[];          // Ordenado por
    scale?:           number;            // Escala de los datos
    nodes?:           NodeElement[];     // Nodos relacionados
    summary?:         PurpleSummary;     // Resumen de los datos
    isEntityGrouped?: boolean;           // Indica si las entidades están agrupadas
}

export interface Chains {
    BB838741B2FED9E68D4D4852C0F949B4: Bb838741B2Fed9E68D4D4852C0F949B4; // Cadena específica de acceso
}

export interface Bb838741B2Fed9E68D4D4852C0F949B4 {
    request:  Request;                   // Solicitud asociada a la cadena
    children: BB838741B2FED9E68D4D4852C0F949B4Children; // Hijos de la cadena
}

export interface BB838741B2FED9E68D4D4852C0F949B4Children {
    "23924.3": The239243_Class;         // Clase específica dentro de los hijos
}

export interface The239243_Class {
    request:  Request;                   // Solicitud asociada a la clase
    children: The239243_Children;       // Hijos de la clase
}

export interface The239243_Children {
    "23924.33": The2392433;             // Clase específica dentro de los hijos
    "23924.34": The2392434_Class;       // Clase específica dentro de los hijos
}

export interface The2392433 {
    request:  Request;                    // Solicitud asociada a la clase
    children: The2392433_Children;       // Hijos de la clase
}

export interface The2392433_Children {
    "23924.37": The2392434_Class;        // Clase específica dentro de los hijos
}

export interface The2392434_Class {
    request: Request;                     // Solicitud asociada a la clase
}

export interface Request {
    url:                  string;         // URL de la solicitud
    startTime:            number;         // Tiempo de inicio de la solicitud
    endTime:              number;         // Tiempo de finalización de la solicitud
    responseReceivedTime: number;         // Tiempo en que se recibió la respuesta
    transferSize:         number;         // Tamaño de la transferencia de datos
}

export interface ItemDebugData {
    type:                DebugDataType;    // Tipo de datos de depuración
    impact?:             string;           // Impacto asociado (opcional)
    tags?:               string[];         // Etiquetas asociadas (opcional)
    networkStartTimeTs?: number;          // Tiempo de inicio de la red en timestamp (opcional)
}

export enum DebugDataType {
    Criticalrequestchain = "criticalrequestchain", // Tipo de datos para cadena de solicitud crítica
    Debugdata = "debugdata",                          // Datos de depuración
    Filmstrip = "filmstrip",                          // Tipo de datos para filmstrip
    Screenshot = "screenshot",                        // Tipo de datos para captura de pantalla
    Table = "table",                                  // Tipo de datos para tabla
    TreemapData = "treemap-data",                    // Tipo de datos para treemap
}

export interface Heading {
    key:              string;                         // Clave del encabezado
    valueType:        ValueTypeEnum;                  // Tipo de valor del encabezado
    label:            string;                         // Etiqueta del encabezado
    granularity?:     number;                         // Granularidad (opcional)
    subItemsHeading?: SubItemsHeading;                // Encabezado de subelementos (opcional)
    displayUnit?:     string;                         // Unidad de visualización (opcional)
}

export interface SubItemsHeading {
    key:        string;                               // Clave del encabezado de subelementos
    valueType?: ValueTypeEnum;                        // Tipo de valor (opcional)
}

export enum ValueTypeEnum {
    Bytes = "bytes",                                  // Tipo de valor en bytes
    MS = "ms",                                       // Tipo de valor en milisegundos
    Node = "node",                                   // Tipo de valor en nodo
    Numeric = "numeric",                             // Tipo de valor numérico
    Text = "text",                                   // Tipo de valor de texto
    TimespanMS = "timespanMs",                       // Tipo de valor de duración en milisegundos
    URL = "url",                                     // Tipo de valor en URL
}

export interface PurpleItem {
    node?:                      RelatedNodeClass;    // Nodo relacionado (opcional)
    subItems?:                  PurpleSubItems;      // Subelementos (opcional)
    numRequests?:               number;               // Número de solicitudes (opcional)
    numScripts?:                number;               // Número de scripts (opcional)
    numStylesheets?:            number;               // Número de hojas de estilo (opcional)
    numFonts?:                  number;               // Número de fuentes (opcional)
    numTasks?:                  number;               // Número total de tareas (opcional)
    numTasksOver10ms?:          number;               // Número de tareas que tardan más de 10 ms (opcional)
    numTasksOver25ms?:          number;               // Número de tareas que tardan más de 25 ms (opcional)
    numTasksOver50ms?:          number;               // Número de tareas que tardan más de 50 ms (opcional)
    numTasksOver100ms?:         number;               // Número de tareas que tardan más de 100 ms (opcional)
    numTasksOver500ms?:         number;               // Número de tareas que tardan más de 500 ms (opcional)
    rtt?:                       number;               // Tiempo de ida y vuelta (opcional)
    throughput?:                number;               // Rendimiento (opcional)
    maxRtt?:                    number;               // Máximo RTT (opcional)
    maxServerLatency?:          number;               // Máxima latencia del servidor (opcional)
    totalByteWeight?:           number;               // Peso total en bytes (opcional)
    totalTaskTime?:             number;               // Tiempo total de tarea (opcional)
    mainDocumentTransferSize?:  number;               // Tamaño de la transferencia del documento principal (opcional)
    score?:                     number;               // Puntuación del elemento (opcional)
    duration?:                  number;               // Duración del elemento (opcional)
    startTime?:                 number;               // Tiempo de inicio (opcional)
    url?:                       string;               // URL del elemento (opcional)
    sessionTargetType?:         SessionTargetType;    // Tipo de objetivo de la sesión (opcional)
    protocol?:                  Protocol;             // Protocolo utilizado (opcional)
    rendererStartTime?:         number;               // Tiempo de inicio del renderizador (opcional)
    networkRequestTime?:        number;               // Tiempo de solicitud de red (opcional)
    networkEndTime?:            number;               // Tiempo de finalización de la red (opcional)
    finished?:                  boolean;              // Indica si ha finalizado (opcional)
    transferSize?:              number;               // Tamaño de transferencia del elemento (opcional)
    resourceSize?:              number;               // Tamaño del recurso (opcional)
    statusCode?:                number;               // Código de estado de la solicitud (opcional)
    mimeType?:                  string;               // Tipo MIME del recurso (opcional)
    resourceType?:              string;               // Tipo de recurso (opcional)
    priority?:                  Priority;             // Prioridad del recurso (opcional)
    experimentalFromMainFrame?: boolean;              // Indica si es experimental desde el marco principal (opcional)
    entity?:                    Entity;               // Entidad asociada (opcional)
    isLinkPreload?:             boolean;              // Indica si es un enlace de precarga (opcional)
    origin?:                    string;               // Origen del recurso (opcional)
    label?:                     string;               // Etiqueta del recurso (opcional)
    requestCount?:              number;               // Contador de solicitudes (opcional)
    timing?:                    number;               // Tiempo asociado (opcional)
    timestamp?:                 number;               // Marca de tiempo (opcional)
    data?:                      string;               // Datos adicionales (opcional)
    mainThreadTime?:            number;               // Tiempo en el hilo principal (opcional)
    blockingTime?:              number;               // Tiempo de bloqueo (opcional)
    tbtImpact?:                 number;               // Impacto de TBT (opcional)
}

export enum Entity {
    GoogleFonts = "Google Fonts",                     // Entidad asociada a Google Fonts
    SupernovaOneCOM = "supernova-one.com",           // Entidad asociada a supernova-one.com
}

export interface RelatedNodeClass {
    type:         ValueTypeEnum;                      // Tipo del nodo relacionado
    lhId:         string;                               // Identificador del nodo
    path:         string;                               // Ruta del nodo
    selector:     string;                               // Selector CSS del nodo
    boundingRect: BoundingRect;                        // Rectángulo delimitador del nodo
    snippet:      string;                               // Fragmento de código relacionado
    nodeLabel:    string;                               // Etiqueta del nodo
    explanation?: string;                               // Explicación opcional del nodo
}

export interface BoundingRect {
    top:    number;                                    // Coordenada superior del rectángulo
    bottom: number;                                    // Coordenada inferior del rectángulo
    left:   number;                                    // Coordenada izquierda del rectángulo
    right:  number;                                    // Coordenada derecha del rectángulo
    width:  number;                                    // Ancho del rectángulo
    height: number;                                    // Altura del rectángulo
}

export enum Priority {
    High = "High",                                    // Prioridad alta
    Low = "Low",                                      // Prioridad baja
    VeryHigh = "VeryHigh",                            // Prioridad muy alta
}

export enum Protocol {
    H2 = "h2",                                       // Protocolo HTTP/2
    H3 = "h3",                                       // Protocolo HTTP/3
}

export enum SessionTargetType {
    Page = "page",                                   // Tipo de objetivo de sesión: página
}

export interface PurpleSubItems {
    type:  SubItemsType;                             // Tipo de subelementos
    items: FluffyItem[];                             // Lista de elementos
}

export interface FluffyItem {
    relatedNode?:    RelatedNodeClass;              // Nodo relacionado (opcional)
    extra?:          Extra;                           // Datos adicionales (opcional)
    cause?:          string;                          // Causa del elemento (opcional)
    url?:            string;                          // URL del elemento (opcional)
    mainThreadTime?: number;                         // Tiempo en el hilo principal (opcional)
    blockingTime?:   number;                         // Tiempo de bloqueo (opcional)
    transferSize?:   number;                         // Tamaño de transferencia (opcional)
    tbtImpact?:      number;                         // Impacto de TBT (opcional)
}

export interface Extra {
    type:  ValueTypeEnum;                            // Tipo de valor adicional
    value: string;                                   // Valor adicional
}

export enum SubItemsType {
    Subitems = "subitems",                           // Tipo de subelementos
}

export interface LongestChain {
    duration:     number;                            // Duración de la cadena
    length:       number;                            // Longitud de la cadena
    transferSize: number;                            // Tamaño de transferencia de la cadena
}

export interface NodeElement {
    name:          string;                           // Nombre del elemento
    resourceBytes: number;                           // Bytes del recurso
    unusedBytes?:  number;                           // Bytes no utilizados (opcional)
    children?:     NodeElement[];                    // Hijos del elemento (opcional)
}

export interface PurpleSummary {
    wastedBytes: number;                             // Bytes desperdiciados
    wastedMs:    number;                             // Milisegundos desperdiciados
}

export interface AccesskeysMetricSavings {
    CLS?: number;                                   // Ahorros de CLS (opcional)
    LCP?: number;                                   // Ahorros de LCP (opcional)
    TBT?: number;                                   // Ahorros de TBT (opcional)
}

export enum NumericUnit {
    Millisecond = "millisecond",                     // Unidad numérica en milisegundos
}

export enum ScoreDisplayMode {
    Binary = "binary",                             // Modo de visualización de puntaje binario
    Informative = "informative",                   // Modo de visualización de puntaje informativo
    Manual = "manual",                             // Modo de visualización manual
    MetricSavings = "metricSavings",               // Modo de visualización de ahorros de métricas
    NotApplicable = "notApplicable",               // Modo para indicar que no es aplicable
    Numeric = "numeric",                           // Modo de visualización numérica
}

export interface ScoringOptions {
    p10:    number;                                // Percentil 10 para opciones de puntaje
    median: number;                                // Mediana para opciones de puntaje
}

export interface BootupTime {
    id:               string;                       // Identificador único del tiempo de arranque
    title:            string;                       // Título del tiempo de arranque
    description:      string;                       // Descripción del tiempo de arranque
    score:            number;                       // Puntaje asociado al tiempo de arranque
    scoreDisplayMode: ScoreDisplayMode;            // Modo de visualización del puntaje
    numericValue:     number;                       // Valor numérico del tiempo de arranque
    numericUnit:      NumericUnit;                 // Unidad numérica del tiempo de arranque
    displayValue:     string;                       // Valor a mostrar en la interfaz
    metricSavings:    BootupTimeMetricSavings;     // Ahorros métricos asociados al tiempo de arranque
    details:          BootupTimeDetails;           // Detalles sobre el tiempo de arranque
    guidanceLevel:    number;                       // Nivel de orientación para mejorar el tiempo de arranque
}

export interface BootupTimeDetails {
    type:     DebugDataType;                       // Tipo de datos de depuración
    headings: Heading[];                           // Encabezados de los detalles
    items:    TentacledItem[];                     // Elementos detallados sobre el tiempo de arranque
    summary:  FluffySummary;                       // Resumen de los detalles
    sortedBy: string[];                            // Criterios de ordenación
}

export interface TentacledItem {
    url:                string;                     // URL del elemento
    total:              number;                     // Total del tiempo de arranque
    scripting:          number;                     // Tiempo de scripting
    scriptParseCompile: number;                     // Tiempo de análisis y compilación del script
}

export interface FluffySummary {
    wastedMs: number;                              // Milisegundos desperdiciados
}

export interface BootupTimeMetricSavings {
    TBT: number;                                   // Ahorros de TBT en el tiempo de arranque
}

export interface CumulativeLayoutShift {
    id:               string;                       // Identificador único del cambio de diseño acumulativo
    title:            string;                       // Título del cambio de diseño acumulativo
    description:      string;                       // Descripción del cambio de diseño acumulativo
    score:            number;                       // Puntaje asociado al cambio de diseño
    scoreDisplayMode: ScoreDisplayMode;            // Modo de visualización del puntaje
    numericValue:     number;                       // Valor numérico del cambio de diseño
    numericUnit:      string;                       // Unidad numérica del cambio de diseño
    displayValue?:    string;                       // Valor a mostrar en la interfaz
    scoringOptions?:  ScoringOptions;              // Opciones de puntaje para el cambio de diseño
    details?:         CumulativeLayoutShiftDetails; // Detalles sobre el cambio de diseño acumulativo
    guidanceLevel?:   number;                       // Nivel de orientación para mejorar el cambio de diseño
}

export interface CumulativeLayoutShiftDetails {
    type:      DebugDataType;                     // Tipo de datos de depuración
    items:     StickyItem[];                      // Elementos detallados del cambio de diseño
    headings?: Heading[];                          // Encabezados de los detalles
    sortedBy?: string[];                           // Criterios de ordenación
}

export interface StickyItem {
    cumulativeLayoutShiftMainFrame?:            number; // Cambio de diseño acumulativo en el marco principal (opcional)
    newEngineResultDiffered?:                   boolean; // Indica si los resultados de un nuevo motor fueron diferentes (opcional)
    firstContentfulPaint?:                      number;   // Tiempo hasta el primer paint con contenido (opcional)
    largestContentfulPaint?:                    number;   // Tiempo hasta el mayor paint con contenido (opcional)
    interactive?:                               number;   // Tiempo hasta que la página es interactiva (opcional)
    speedIndex?:                                number;   // Índice de velocidad (opcional)
    totalBlockingTime?:                         number;   // Tiempo total de bloqueo (opcional)
    maxPotentialFID?:                           number;   // FID potencial máximo (opcional)
    cumulativeLayoutShift?:                     number;   // Cambio de diseño acumulativo (opcional)
    timeToFirstByte?:                           number;   // Tiempo hasta el primer byte (opcional)
    observedTimeOrigin?:                        number;   // Tiempo de origen observado (opcional)
    observedTimeOriginTs?:                      number;   // Timestamp del tiempo de origen observado (opcional)
    observedNavigationStart?:                   number;   // Tiempo de inicio de navegación observado (opcional)
    observedNavigationStartTs?:                 number;   // Timestamp del tiempo de inicio de navegación observado (opcional)
    observedFirstPaint?:                        number;   // Tiempo del primer paint observado (opcional)
    observedFirstPaintTs?:                      number;   // Timestamp del primer paint observado (opcional)
    observedFirstContentfulPaint?:              number;   // Tiempo hasta el primer paint con contenido observado (opcional)
    observedFirstContentfulPaintTs?:            number;   // Timestamp del primer paint con contenido observado (opcional)
    observedFirstContentfulPaintAllFrames?:     number;   // Tiempo hasta el primer paint con contenido observado en todos los marcos (opcional)
    observedFirstContentfulPaintAllFramesTs?:   number;   // Timestamp del primer paint observado en todos los marcos (opcional)
    observedLargestContentfulPaint?:            number;   // Tiempo hasta el mayor paint con contenido observado (opcional)
    observedLargestContentfulPaintTs?:          number;   // Timestamp del mayor paint observado (opcional)
    observedLargestContentfulPaintAllFrames?:   number;   // Tiempo hasta el mayor paint con contenido observado en todos los marcos (opcional)
    observedLargestContentfulPaintAllFramesTs?: number;   // Timestamp del mayor paint observado en todos los marcos (opcional)
    observedTraceEnd?:                          number;   // Tiempo de finalización del trazo observado (opcional)
    observedTraceEndTs?:                        number;   // Timestamp de finalización del trazo observado (opcional)
    observedLoad?:                              number;   // Tiempo de carga observado (opcional)
    observedLoadTs?:                            number;   // Timestamp de carga observado (opcional)
    observedDomContentLoaded?:                  number;   // Tiempo de DOMContentLoaded observado (opcional)
    observedDomContentLoadedTs?:                number;   // Timestamp de DOMContentLoaded observado (opcional)
    observedCumulativeLayoutShift?:             number;   // Cambio de diseño acumulativo observado (opcional)
    observedCumulativeLayoutShiftMainFrame?:    number;   // Cambio de diseño acumulativo observado en el marco principal (opcional)
    observedFirstVisualChange?:                 number;   // Tiempo hasta el primer cambio visual observado (opcional)
    observedFirstVisualChangeTs?:               number;   // Timestamp del primer cambio visual observado (opcional)
    observedLastVisualChange?:                  number;   // Tiempo hasta el último cambio visual observado (opcional)
    observedLastVisualChangeTs?:                number;   // Timestamp del último cambio visual observado (opcional)
    observedSpeedIndex?:                        number;   // Índice de velocidad observado (opcional)
    observedSpeedIndexTs?:                      number;   // Timestamp del índice de velocidad observado (opcional)
    lcpInvalidated?:                            boolean; // Indica si LCP fue invalidado (opcional)
    origin?:                                    string;   // Origen de los datos observados (opcional)
    serverResponseTime?:                        number;   // Tiempo de respuesta del servidor (opcional)
    url?:                                       string;   // URL del elemento (opcional)
    totalBytes?:                                number;   // Bytes totales (opcional)
}

export interface DOMSize {
    id:               string;                       // Identificador único
    title:            string;                       // Título de la métrica de tamaño del DOM
    description:      string;                       // Descripción de la métrica
    score:            number;                       // Puntuación asociada al tamaño del DOM
    scoreDisplayMode: ScoreDisplayMode;             // Modo de visualización de la puntuación
    numericValue:     number;                       // Valor numérico de la métrica
    numericUnit:      string;                       // Unidad del valor numérico
    displayValue:     string;                       // Valor a mostrar en la interfaz
    metricSavings?:   BootupTimeMetricSavings;      // Métricas de ahorro (opcional)
    details:          DetailsElement;               // Detalles adicionales
    guidanceLevel:    number;                       // Nivel de orientación para mejoras
}

export interface DetailsElement {
    type:              ItemType;                    // Tipo de detalles (ej. oportunidad, tabla)
    headings:          Heading[];                   // Encabezados en los detalles
    items:             ItemItem[];                  // Lista de elementos asociados a los detalles
    debugData?:        ItemDebugData;               // Datos de depuración (opcional)
    sortedBy?:         string[];                    // Criterios de ordenación (opcional)
    overallSavingsMs?: number;                      // Ahorro global en milisegundos (opcional)
}

export interface ItemItem {
    node?:                      RelatedNodeClass;    // Nodo relacionado (opcional)
    subItems?:                  FluffySubItems;      // Subelementos relacionados (opcional)
    statistic?:                 string;              // Estadística asociada (opcional)
    value?:                     Value;               // Valor del ítem (opcional)
    phase?:                     string;              // Fase del ítem (opcional)
    timing?:                    number;              // Temporización del ítem (opcional)
    percent?:                   string;              // Porcentaje asociado (opcional)
    score?:                     number;              // Puntuación (opcional)
    duration?:                  number;              // Duración (opcional)
    startTime?:                 number;              // Tiempo de inicio (opcional)
    group?:                     string;              // Grupo al que pertenece el ítem (opcional)
    groupLabel?:                string;              // Etiqueta del grupo (opcional)
    url?:                       string;              // URL asociada (opcional)
    sessionTargetType?:         SessionTargetType;   // Tipo de destino de sesión (opcional)
    protocol?:                  Protocol;            // Protocolo utilizado (opcional)
    rendererStartTime?:         number;              // Tiempo de inicio del renderizador (opcional)
    networkRequestTime?:        number;              // Tiempo de solicitud de red (opcional)
    networkEndTime?:            number;              // Tiempo de finalización de la red (opcional)
    finished?:                  boolean;             // Indica si ha finalizado (opcional)
    transferSize?:              number;              // Tamaño de transferencia (opcional)
    resourceSize?:              number;              // Tamaño del recurso (opcional)
    statusCode?:                number;              // Código de estado HTTP (opcional)
    mimeType?:                  string;              // Tipo MIME del recurso (opcional)
    resourceType?:              string;              // Tipo de recurso (opcional)
    priority?:                  Priority;            // Prioridad del recurso (opcional)
    experimentalFromMainFrame?: boolean;             // Indica si es experimental desde el marco principal (opcional)
    entity?:                    Entity;              // Entidad asociada (opcional)
    isLinkPreload?:             boolean;             // Indica si es un enlace precargado (opcional)
    origin?:                    string;              // Origen del recurso (opcional)
    rtt?:                       number;              // Tiempo de ida y vuelta (opcional)
    serverResponseTime?:        number;              // Tiempo de respuesta del servidor (opcional)
    totalBytes?:                number;              // Bytes totales transferidos (opcional)
    wastedMs?:                  number;              // Tiempo desperdiciado en milisegundos (opcional)
    label?:                     string;              // Etiqueta asociada (opcional)
    requestCount?:              number;              // Número de solicitudes (opcional)
    responseTime?:              number;              // Tiempo de respuesta (opcional)
}

export interface FluffySubItems {
    type:  SubItemsType;          // Tipo de subelementos
    items: IndigoItem[];          // Lista de subelementos
}

export interface IndigoItem {
    relatedNode?: RelatedNodeClass;  // Nodo relacionado (opcional)
    extra?:       Extra;             // Datos adicionales (opcional)
    cause?:       string;            // Causa asociada (opcional)
}

export interface Value {
    type:        ValueTypeEnum;    // Tipo de valor
    granularity: number;           // Granularidad del valor
    value:       number;           // Valor numérico
}

export enum ItemType {
    Opportunity = "opportunity",  // Tipo de oportunidad
    Table = "table",              // Tipo tabla
}

export interface DuplicatedJavascript {
    id:               string;                       // Identificador único del análisis de JavaScript duplicado
    title:            string;                       // Título del análisis
    description:      string;                       // Descripción del análisis
    score:            number;                       // Puntuación obtenida
    scoreDisplayMode: ScoreDisplayMode;             // Modo de visualización de la puntuación
    numericValue:     number;                       // Valor numérico del análisis
    numericUnit:      NumericUnit;                  // Unidad del valor numérico
    displayValue:     string;                       // Valor a mostrar en la interfaz
    metricSavings:    DebugDataMetricSavings;       // Métricas de ahorro (tiempos o bytes)
    details:          DuplicatedJavascriptDetails;  // Detalles del análisis
    guidanceLevel:    number;                       // Nivel de orientación para mejoras
    warnings?:        any[];                        // Advertencias adicionales (opcional)
}


export interface DuplicatedJavascriptDetails {
    type:                ItemType;                  // Tipo de detalle (ej. oportunidad, tabla)
    headings:            any[];                     // Encabezados de los detalles
    items:               any[];                     // Lista de elementos relacionados con los detalles
    overallSavingsMs:    number;                    // Ahorro global en milisegundos
    overallSavingsBytes: number;                    // Ahorro global en bytes
    sortedBy:            SortedBy[];                // Criterios de ordenación de los elementos
    debugData:           PurpleDebugData;           // Datos de depuración adicionales
}

export interface PurpleDebugData {
    type:          DebugDataType;                   // Tipo de datos de depuración
    metricSavings: DebugDataMetricSavings;          // Métricas de ahorro relacionadas con FCP y LCP
}

export interface DebugDataMetricSavings {
    FCP: number;                                   // Tiempo de mejora potencial en First Contentful Paint (FCP)
    LCP: number;                                   // Tiempo de mejora potencial en Largest Contentful Paint (LCP)
}

export enum SortedBy {
    WastedBytes = "wastedBytes",                   // Ordenar por bytes desperdiciados
}

export interface LargestContentfulPaintElement {
    id:               string;                                      // Identificador único del análisis de Largest Contentful Paint (LCP)
    title:            string;                                      // Título del análisis
    description:      string;                                      // Descripción del análisis
    score:            number;                                      // Puntuación obtenida
    scoreDisplayMode: ScoreDisplayMode;                            // Modo de visualización de la puntuación
    displayValue:     string;                                      // Valor a mostrar en la interfaz
    metricSavings:    LargestContentfulPaintElementMetricSavings;  // Métricas de ahorro relacionadas con LCP
    details:          LargestContentfulPaintElementDetails;        // Detalles del análisis
    guidanceLevel:    number;                                      // Nivel de orientación para mejoras
}

export interface LargestContentfulPaintElementDetails {
    type:  string;                    // Tipo de detalle (puede variar)
    items: DetailsElement[];           // Lista de elementos relacionados con los detalles del LCP
}

export interface LargestContentfulPaintElementMetricSavings {
    LCP: number;                      // Tiempo de mejora potencial en Largest Contentful Paint (LCP)
}

export interface LongTasks {
    id:               string;                      // Identificador único del análisis de tareas largas
    title:            string;                      // Título del análisis
    description:      string;                      // Descripción del análisis
    score:            number;                      // Puntuación obtenida
    scoreDisplayMode: ScoreDisplayMode;            // Modo de visualización de la puntuación
    displayValue:     string;                      // Valor a mostrar en la interfaz
    metricSavings:    BootupTimeMetricSavings;     // Métricas de ahorro relacionadas con el tiempo de arranque
    details:          LongTasksDetails;            // Detalles del análisis
    guidanceLevel:    number;                      // Nivel de orientación para mejoras
}

export interface LongTasksDetails {
    type:        DebugDataType;                    // Tipo de datos de depuración
    headings:    Heading[];                        // Encabezados de los detalles
    items:       IndecentItem[];                   // Lista de elementos relacionados con las tareas largas
    sortedBy:    string[];                         // Criterios de ordenación
    skipSumming: string[];                         // Criterios a ignorar para sumar
    debugData:   FluffyDebugData;                  // Datos de depuración adicionales
}

export interface FluffyDebugData {
    type:  DebugDataType;                          // Tipo de datos de depuración
    urls:  string[];                               // URLs relacionadas con las tareas largas
    tasks: Task[];                                 // Lista de tareas con detalles de duración y otros atributos
}

export interface Task {
    urlIndex:              number;                 // Índice de la URL relacionada con la tarea
    startTime:             number;                 // Tiempo de inicio de la tarea
    duration:              number;                 // Duración total de la tarea
    other:                 number;                 // Tiempo utilizado por otras acciones
    scriptEvaluation:      number;                 // Tiempo dedicado a la evaluación del script
    paintCompositeRender?: number;                 // Tiempo dedicado a la pintura y renderización compuesta (opcional)
    styleLayout?:          number;                 // Tiempo dedicado al estilo y diseño (opcional)
}

export interface IndecentItem {
    url:       string;                             // URL de la tarea larga
    duration:  number;                             // Duración de la tarea
    startTime: number;                             // Tiempo de inicio de la tarea
}

export interface Redirects {
    id:               string;                      // Identificador único del análisis de redirecciones
    title:            string;                      // Título del análisis
    description:      string;                      // Descripción del análisis
    score:            number;                      // Puntuación obtenida
    scoreDisplayMode: ScoreDisplayMode;            // Modo de visualización de la puntuación
    numericValue:     number;                      // Valor numérico asociado al análisis
    numericUnit:      NumericUnit;                 // Unidad del valor numérico
    displayValue?:    string;                      // Valor a mostrar en la interfaz (opcional)
    metricSavings:    DebugDataMetricSavings;      // Métricas de ahorro relacionadas con las redirecciones
    details:          DetailsElement;              // Detalles del análisis
    guidanceLevel:    number;                      // Nivel de orientación para mejoras
}

export interface UsesRelPreconnect {
    id:               string;                      // Identificador único del análisis de `rel="preconnect"`
    title:            string;                      // Título del análisis
    description:      string;                      // Descripción del análisis
    score:            number;                      // Puntuación obtenida
    scoreDisplayMode: ScoreDisplayMode;            // Modo de visualización de la puntuación
    numericValue:     number;                      // Valor numérico asociado al análisis
    numericUnit:      NumericUnit;                 // Unidad del valor numérico
    displayValue:     string;                      // Valor a mostrar en la interfaz
    warnings:         any[];                       // Advertencias relacionadas con el uso de `rel="preconnect"`
    metricSavings:    DebugDataMetricSavings;      // Métricas de ahorro relacionadas con `rel="preconnect"`
    details:          DetailsElement;              // Detalles del análisis
    guidanceLevel:    number;                      // Nivel de orientación para mejoras
}

export interface Viewport {
    id:               string;                      // Identificador único del análisis de viewport
    title:            string;                      // Título del análisis
    description:      string;                      // Descripción del análisis
    score:            number;                      // Puntuación obtenida
    scoreDisplayMode: ScoreDisplayMode;            // Modo de visualización de la puntuación
    warnings:         any[];                       // Advertencias relacionadas con el análisis del viewport
    metricSavings:    ViewportMetricSavings;       // Métricas de ahorro relacionadas con el viewport
    details:          ViewportDetails;             // Detalles del análisis
    guidanceLevel:    number;                      // Nivel de orientación para mejoras
}

export interface ViewportDetails {
    type:            DebugDataType;                // Tipo de datos de depuración
    viewportContent: string;                       // Contenido del viewport evaluado
}

export interface ViewportMetricSavings {
    INP: number;                                   // Métricas de mejora potencial en Interactividad (INP)
}
