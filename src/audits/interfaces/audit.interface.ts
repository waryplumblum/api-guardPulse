export interface AuditDetails {
  _id: string; // Identificador único de la auditoría
  url: string; // URL de la auditoría
  performance: number; // Puntaje de rendimiento
  accessibility: number; // Puntaje de accesibilidad
  seo: number; // Puntaje SEO
  createdAt: Date; // Fecha de creación
  reportId: string; // ID del reporte asociado (referencia al reporte)
}