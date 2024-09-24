
export interface ReportDetails {
    viewport:                           Viewport;
    "first-contentful-paint":           CumulativeLayoutShift;
    "largest-contentful-paint":         Accesskeys;
    "first-meaningful-paint":           Accesskeys;
    "speed-index":                      Accesskeys;
    "screenshot-thumbnails":            Accesskeys;
    "final-screenshot":                 Accesskeys;
    "total-blocking-time":              CumulativeLayoutShift;
    "max-potential-fid":                Accesskeys;
    "cumulative-layout-shift":          CumulativeLayoutShift;
    "server-response-time":             Redirects;
    interactive:                        Accesskeys;
    "user-timings":                     Accesskeys;
    "critical-request-chains":          Accesskeys;
    redirects:                          Redirects;
    "mainthread-work-breakdown":        DOMSize;
    "bootup-time":                      BootupTime;
    "uses-rel-preconnect":              UsesRelPreconnect;
    "font-display":                     Accesskeys;
    diagnostics:                        Accesskeys;
    "network-requests":                 Accesskeys;
    "network-rtt":                      Accesskeys;
    "network-server-latency":           CumulativeLayoutShift;
    "main-thread-tasks":                Accesskeys;
    metrics:                            CumulativeLayoutShift;
    "resource-summary":                 Accesskeys;
    "third-party-summary":              Accesskeys;
    "third-party-facades":              Accesskeys;
    "largest-contentful-paint-element": LargestContentfulPaintElement;
    "lcp-lazy-loaded":                  Accesskeys;
    "layout-shifts":                    Accesskeys;
    "long-tasks":                       LongTasks;
    "non-composited-animations":        Accesskeys;
    "unsized-images":                   Accesskeys;
    "prioritize-lcp-image":             Accesskeys;
    "script-treemap-data":              Accesskeys;
    accesskeys:                         Accesskeys;
    "aria-allowed-attr":                Accesskeys;
    "aria-allowed-role":                Accesskeys;
    "aria-command-name":                Accesskeys;
    "aria-conditional-attr":            Accesskeys;
    "aria-deprecated-role":             Accesskeys;
    "aria-dialog-name":                 Accesskeys;
    "aria-hidden-body":                 Accesskeys;
    "aria-hidden-focus":                Accesskeys;
    "aria-input-field-name":            Accesskeys;
    "aria-meter-name":                  Accesskeys;
    "aria-progressbar-name":            Accesskeys;
    "aria-prohibited-attr":             Accesskeys;
    "aria-required-attr":               Accesskeys;
    "aria-required-children":           Accesskeys;
    "aria-required-parent":             Accesskeys;
    "aria-roles":                       Accesskeys;
    "aria-text":                        Accesskeys;
    "aria-toggle-field-name":           Accesskeys;
    "aria-tooltip-name":                Accesskeys;
    "aria-treeitem-name":               Accesskeys;
    "aria-valid-attr-value":            Accesskeys;
    "aria-valid-attr":                  Accesskeys;
    "button-name":                      Accesskeys;
    bypass:                             Accesskeys;
    "color-contrast":                   Accesskeys;
    "definition-list":                  Accesskeys;
    dlitem:                             Accesskeys;
    "document-title":                   Accesskeys;
    "duplicate-id-aria":                Accesskeys;
    "empty-heading":                    Accesskeys;
    "form-field-multiple-labels":       Accesskeys;
    "frame-title":                      Accesskeys;
    "heading-order":                    Accesskeys;
    "html-has-lang":                    Accesskeys;
    "html-lang-valid":                  Accesskeys;
    "html-xml-lang-mismatch":           Accesskeys;
    "identical-links-same-purpose":     Accesskeys;
    "image-alt":                        Accesskeys;
    "image-redundant-alt":              Accesskeys;
    "input-button-name":                Accesskeys;
    "input-image-alt":                  Accesskeys;
    "label-content-name-mismatch":      Accesskeys;
    label:                              Accesskeys;
    "landmark-one-main":                Accesskeys;
    "link-name":                        Accesskeys;
    "link-in-text-block":               Accesskeys;
    list:                               Accesskeys;
    listitem:                           Accesskeys;
    "meta-refresh":                     Accesskeys;
    "meta-viewport":                    Accesskeys;
    "object-alt":                       Accesskeys;
    "select-name":                      Accesskeys;
    "skip-link":                        Accesskeys;
    tabindex:                           Accesskeys;
    "table-duplicate-name":             Accesskeys;
    "table-fake-caption":               Accesskeys;
    "target-size":                      Accesskeys;
    "td-has-header":                    Accesskeys;
    "td-headers-attr":                  Accesskeys;
    "th-has-data-cells":                Accesskeys;
    "valid-lang":                       Accesskeys;
    "video-caption":                    Accesskeys;
    "custom-controls-labels":           Accesskeys;
    "custom-controls-roles":            Accesskeys;
    "focus-traps":                      Accesskeys;
    "focusable-controls":               Accesskeys;
    "interactive-element-affordance":   Accesskeys;
    "logical-tab-order":                Accesskeys;
    "managed-focus":                    Accesskeys;
    "offscreen-content-hidden":         Accesskeys;
    "use-landmarks":                    Accesskeys;
    "visual-order-follows-dom":         Accesskeys;
    "uses-long-cache-ttl":              DOMSize;
    "total-byte-weight":                CumulativeLayoutShift;
    "offscreen-images":                 DuplicatedJavascript;
    "render-blocking-resources":        Redirects;
    "unminified-css":                   DuplicatedJavascript;
    "unminified-javascript":            DuplicatedJavascript;
    "unused-css-rules":                 DuplicatedJavascript;
    "unused-javascript":                DuplicatedJavascript;
    "modern-image-formats":             DuplicatedJavascript;
    "uses-optimized-images":            DuplicatedJavascript;
    "uses-text-compression":            DuplicatedJavascript;
    "uses-responsive-images":           DuplicatedJavascript;
    "efficient-animated-content":       DuplicatedJavascript;
    "duplicated-javascript":            DuplicatedJavascript;
    "legacy-javascript":                DuplicatedJavascript;
    "dom-size":                         DOMSize;
    "no-document-write":                Accesskeys;
    "uses-http2":                       Redirects;
    "uses-passive-event-listeners":     Accesskeys;
    "meta-description":                 Accesskeys;
    "http-status-code":                 Accesskeys;
    "link-text":                        Accesskeys;
    "crawlable-anchors":                Accesskeys;
    "is-crawlable":                     Accesskeys;
    "robots-txt":                       Accesskeys;
    hreflang:                           Accesskeys;
    canonical:                          Accesskeys;
    "structured-data":                  Accesskeys;
    "bf-cache":                         Accesskeys;
}

export interface Accesskeys {
    id:               string;
    title:            string;
    description:      string;
    score:            number | null;
    scoreDisplayMode: ScoreDisplayMode;
    details?:         AccesskeysDetails;
    guidanceLevel?:   number;
    displayValue?:    string;
    warnings?:        any[];
    numericValue?:    number;
    numericUnit?:     NumericUnit;
    scoringOptions?:  ScoringOptions;
    metricSavings?:   AccesskeysMetricSavings;
}

export interface AccesskeysDetails {
    type:             DebugDataType;
    headings?:        Heading[];
    items?:           PurpleItem[];
    debugData?:       ItemDebugData;
    chains?:          Chains;
    longestChain?:    LongestChain;
    timing?:          number;
    timestamp?:       number;
    data?:            string;
    sortedBy?:        string[];
    scale?:           number;
    nodes?:           NodeElement[];
    summary?:         PurpleSummary;
    isEntityGrouped?: boolean;
}

export interface Chains {
    BB838741B2FED9E68D4D4852C0F949B4: Bb838741B2Fed9E68D4D4852C0F949B4;
}

export interface Bb838741B2Fed9E68D4D4852C0F949B4 {
    request:  Request;
    children: BB838741B2FED9E68D4D4852C0F949B4Children;
}

export interface BB838741B2FED9E68D4D4852C0F949B4Children {
    "23924.3": The239243_Class;
}

export interface The239243_Class {
    request:  Request;
    children: The239243_Children;
}

export interface The239243_Children {
    "23924.33": The2392433;
    "23924.34": The2392434_Class;
}

export interface The2392433 {
    request:  Request;
    children: The2392433_Children;
}

export interface The2392433_Children {
    "23924.37": The2392434_Class;
}

export interface The2392434_Class {
    request: Request;
}

export interface Request {
    url:                  string;
    startTime:            number;
    endTime:              number;
    responseReceivedTime: number;
    transferSize:         number;
}

export interface ItemDebugData {
    type:                DebugDataType;
    impact?:             string;
    tags?:               string[];
    networkStartTimeTs?: number;
}

export enum DebugDataType {
    Criticalrequestchain = "criticalrequestchain",
    Debugdata = "debugdata",
    Filmstrip = "filmstrip",
    Screenshot = "screenshot",
    Table = "table",
    TreemapData = "treemap-data",
}

export interface Heading {
    key:              string;
    valueType:        ValueTypeEnum;
    label:            string;
    granularity?:     number;
    subItemsHeading?: SubItemsHeading;
    displayUnit?:     string;
}

export interface SubItemsHeading {
    key:        string;
    valueType?: ValueTypeEnum;
}

export enum ValueTypeEnum {
    Bytes = "bytes",
    MS = "ms",
    Node = "node",
    Numeric = "numeric",
    Text = "text",
    TimespanMS = "timespanMs",
    URL = "url",
}

export interface PurpleItem {
    node?:                      RelatedNodeClass;
    subItems?:                  PurpleSubItems;
    numRequests?:               number;
    numScripts?:                number;
    numStylesheets?:            number;
    numFonts?:                  number;
    numTasks?:                  number;
    numTasksOver10ms?:          number;
    numTasksOver25ms?:          number;
    numTasksOver50ms?:          number;
    numTasksOver100ms?:         number;
    numTasksOver500ms?:         number;
    rtt?:                       number;
    throughput?:                number;
    maxRtt?:                    number;
    maxServerLatency?:          number;
    totalByteWeight?:           number;
    totalTaskTime?:             number;
    mainDocumentTransferSize?:  number;
    score?:                     number;
    duration?:                  number;
    startTime?:                 number;
    url?:                       string;
    sessionTargetType?:         SessionTargetType;
    protocol?:                  Protocol;
    rendererStartTime?:         number;
    networkRequestTime?:        number;
    networkEndTime?:            number;
    finished?:                  boolean;
    transferSize?:              number;
    resourceSize?:              number;
    statusCode?:                number;
    mimeType?:                  string;
    resourceType?:              string;
    priority?:                  Priority;
    experimentalFromMainFrame?: boolean;
    entity?:                    Entity;
    isLinkPreload?:             boolean;
    origin?:                    string;
    label?:                     string;
    requestCount?:              number;
    timing?:                    number;
    timestamp?:                 number;
    data?:                      string;
    mainThreadTime?:            number;
    blockingTime?:              number;
    tbtImpact?:                 number;
}

export enum Entity {
    GoogleFonts = "Google Fonts",
    SupernovaOneCOM = "supernova-one.com",
}

export interface RelatedNodeClass {
    type:         ValueTypeEnum;
    lhId:         string;
    path:         string;
    selector:     string;
    boundingRect: BoundingRect;
    snippet:      string;
    nodeLabel:    string;
    explanation?: string;
}

export interface BoundingRect {
    top:    number;
    bottom: number;
    left:   number;
    right:  number;
    width:  number;
    height: number;
}

export enum Priority {
    High = "High",
    Low = "Low",
    VeryHigh = "VeryHigh",
}

export enum Protocol {
    H2 = "h2",
    H3 = "h3",
}

export enum SessionTargetType {
    Page = "page",
}

export interface PurpleSubItems {
    type:  SubItemsType;
    items: FluffyItem[];
}

export interface FluffyItem {
    relatedNode?:    RelatedNodeClass;
    extra?:          Extra;
    cause?:          string;
    url?:            string;
    mainThreadTime?: number;
    blockingTime?:   number;
    transferSize?:   number;
    tbtImpact?:      number;
}

export interface Extra {
    type:  ValueTypeEnum;
    value: string;
}

export enum SubItemsType {
    Subitems = "subitems",
}

export interface LongestChain {
    duration:     number;
    length:       number;
    transferSize: number;
}

export interface NodeElement {
    name:          string;
    resourceBytes: number;
    unusedBytes?:  number;
    children?:     NodeElement[];
}

export interface PurpleSummary {
    wastedBytes: number;
    wastedMs:    number;
}

export interface AccesskeysMetricSavings {
    CLS?: number;
    LCP?: number;
    TBT?: number;
}

export enum NumericUnit {
    Millisecond = "millisecond",
}

export enum ScoreDisplayMode {
    Binary = "binary",
    Informative = "informative",
    Manual = "manual",
    MetricSavings = "metricSavings",
    NotApplicable = "notApplicable",
    Numeric = "numeric",
}

export interface ScoringOptions {
    p10:    number;
    median: number;
}

export interface BootupTime {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue:     number;
    numericUnit:      NumericUnit;
    displayValue:     string;
    metricSavings:    BootupTimeMetricSavings;
    details:          BootupTimeDetails;
    guidanceLevel:    number;
}

export interface BootupTimeDetails {
    type:     DebugDataType;
    headings: Heading[];
    items:    TentacledItem[];
    summary:  FluffySummary;
    sortedBy: string[];
}

export interface TentacledItem {
    url:                string;
    total:              number;
    scripting:          number;
    scriptParseCompile: number;
}

export interface FluffySummary {
    wastedMs: number;
}

export interface BootupTimeMetricSavings {
    TBT: number;
}

export interface CumulativeLayoutShift {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue:     number;
    numericUnit:      string;
    displayValue?:    string;
    scoringOptions?:  ScoringOptions;
    details?:         CumulativeLayoutShiftDetails;
    guidanceLevel?:   number;
}

export interface CumulativeLayoutShiftDetails {
    type:      DebugDataType;
    items:     StickyItem[];
    headings?: Heading[];
    sortedBy?: string[];
}

export interface StickyItem {
    cumulativeLayoutShiftMainFrame?:            number;
    newEngineResultDiffered?:                   boolean;
    firstContentfulPaint?:                      number;
    largestContentfulPaint?:                    number;
    interactive?:                               number;
    speedIndex?:                                number;
    totalBlockingTime?:                         number;
    maxPotentialFID?:                           number;
    cumulativeLayoutShift?:                     number;
    timeToFirstByte?:                           number;
    observedTimeOrigin?:                        number;
    observedTimeOriginTs?:                      number;
    observedNavigationStart?:                   number;
    observedNavigationStartTs?:                 number;
    observedFirstPaint?:                        number;
    observedFirstPaintTs?:                      number;
    observedFirstContentfulPaint?:              number;
    observedFirstContentfulPaintTs?:            number;
    observedFirstContentfulPaintAllFrames?:     number;
    observedFirstContentfulPaintAllFramesTs?:   number;
    observedLargestContentfulPaint?:            number;
    observedLargestContentfulPaintTs?:          number;
    observedLargestContentfulPaintAllFrames?:   number;
    observedLargestContentfulPaintAllFramesTs?: number;
    observedTraceEnd?:                          number;
    observedTraceEndTs?:                        number;
    observedLoad?:                              number;
    observedLoadTs?:                            number;
    observedDomContentLoaded?:                  number;
    observedDomContentLoadedTs?:                number;
    observedCumulativeLayoutShift?:             number;
    observedCumulativeLayoutShiftMainFrame?:    number;
    observedFirstVisualChange?:                 number;
    observedFirstVisualChangeTs?:               number;
    observedLastVisualChange?:                  number;
    observedLastVisualChangeTs?:                number;
    observedSpeedIndex?:                        number;
    observedSpeedIndexTs?:                      number;
    lcpInvalidated?:                            boolean;
    origin?:                                    string;
    serverResponseTime?:                        number;
    url?:                                       string;
    totalBytes?:                                number;
}

export interface DOMSize {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue:     number | number;
    numericUnit:      string;
    displayValue:     string;
    metricSavings?:   BootupTimeMetricSavings;
    details:          DetailsElement;
    guidanceLevel:    number;
}

export interface DetailsElement {
    type:              ItemType;
    headings:          Heading[];
    items:             ItemItem[];
    debugData?:        ItemDebugData;
    sortedBy?:         string[];
    overallSavingsMs?: number;
}

export interface ItemItem {
    node?:                      RelatedNodeClass;
    subItems?:                  FluffySubItems;
    statistic?:                 string;
    value?:                     Value;
    phase?:                     string;
    timing?:                    number;
    percent?:                   string;
    score?:                     number;
    duration?:                  number;
    startTime?:                 number;
    group?:                     string;
    groupLabel?:                string;
    url?:                       string;
    sessionTargetType?:         SessionTargetType;
    protocol?:                  Protocol;
    rendererStartTime?:         number;
    networkRequestTime?:        number;
    networkEndTime?:            number;
    finished?:                  boolean;
    transferSize?:              number;
    resourceSize?:              number;
    statusCode?:                number;
    mimeType?:                  string;
    resourceType?:              string;
    priority?:                  Priority;
    experimentalFromMainFrame?: boolean;
    entity?:                    Entity;
    isLinkPreload?:             boolean;
    origin?:                    string;
    rtt?:                       number;
    serverResponseTime?:        number;
    totalBytes?:                number;
    wastedMs?:                  number;
    label?:                     string;
    requestCount?:              number;
    responseTime?:              number;
}

export interface FluffySubItems {
    type:  SubItemsType;
    items: IndigoItem[];
}

export interface IndigoItem {
    relatedNode?: RelatedNodeClass;
    extra?:       Extra;
    cause?:       string;
}

export interface Value {
    type:        ValueTypeEnum;
    granularity: number;
    value:       number;
}

export enum ItemType {
    Opportunity = "opportunity",
    Table = "table",
}

export interface DuplicatedJavascript {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue:     number;
    numericUnit:      NumericUnit;
    displayValue:     string;
    metricSavings:    DebugDataMetricSavings;
    details:          DuplicatedJavascriptDetails;
    guidanceLevel:    number;
    warnings?:        any[];
}

export interface DuplicatedJavascriptDetails {
    type:                ItemType;
    headings:            any[];
    items:               any[];
    overallSavingsMs:    number;
    overallSavingsBytes: number;
    sortedBy:            SortedBy[];
    debugData:           PurpleDebugData;
}

export interface PurpleDebugData {
    type:          DebugDataType;
    metricSavings: DebugDataMetricSavings;
}

export interface DebugDataMetricSavings {
    FCP: number;
    LCP: number;
}

export enum SortedBy {
    WastedBytes = "wastedBytes",
}

export interface LargestContentfulPaintElement {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    displayValue:     string;
    metricSavings:    LargestContentfulPaintElementMetricSavings;
    details:          LargestContentfulPaintElementDetails;
    guidanceLevel:    number;
}

export interface LargestContentfulPaintElementDetails {
    type:  string;
    items: DetailsElement[];
}

export interface LargestContentfulPaintElementMetricSavings {
    LCP: number;
}

export interface LongTasks {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    displayValue:     string;
    metricSavings:    BootupTimeMetricSavings;
    details:          LongTasksDetails;
    guidanceLevel:    number;
}

export interface LongTasksDetails {
    type:        DebugDataType;
    headings:    Heading[];
    items:       IndecentItem[];
    sortedBy:    string[];
    skipSumming: string[];
    debugData:   FluffyDebugData;
}

export interface FluffyDebugData {
    type:  DebugDataType;
    urls:  string[];
    tasks: Task[];
}

export interface Task {
    urlIndex:              number;
    startTime:             number;
    duration:              number;
    other:                 number;
    scriptEvaluation:      number;
    paintCompositeRender?: number;
    styleLayout?:          number;
}

export interface IndecentItem {
    url:       string;
    duration:  number;
    startTime: number;
}

export interface Redirects {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue:     number;
    numericUnit:      NumericUnit;
    displayValue?:    string;
    metricSavings:    DebugDataMetricSavings;
    details:          DetailsElement;
    guidanceLevel:    number;
}

export interface UsesRelPreconnect {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    numericValue:     number;
    numericUnit:      NumericUnit;
    displayValue:     string;
    warnings:         any[];
    metricSavings:    DebugDataMetricSavings;
    details:          DetailsElement;
    guidanceLevel:    number;
}

export interface Viewport {
    id:               string;
    title:            string;
    description:      string;
    score:            number;
    scoreDisplayMode: ScoreDisplayMode;
    warnings:         any[];
    metricSavings:    ViewportMetricSavings;
    details:          ViewportDetails;
    guidanceLevel:    number;
}

export interface ViewportDetails {
    type:            DebugDataType;
    viewportContent: string;
}

export interface ViewportMetricSavings {
    INP: number;
}
