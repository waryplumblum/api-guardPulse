import { ReportDetails } from "./reportDetails.interface.js"; // Importa la interfaz correspondiente

export interface ReportInterface {
  auditId: string; // ID de la auditoría asociada
  reportData: ReportDetails; // Datos del informe
  createdAt: Date; // Fecha de creación
}
