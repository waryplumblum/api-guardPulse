import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ReportDetails } from '../interfaces/reportDetails.interface.js';
import { DateService } from '../../utils/date.service.js';

// Instancias:
const dateService = new DateService();

@Schema()
export class Report extends Document {
  @Prop({ required: true })
  auditId: string;

  @Prop({ type: MongooseSchema.Types.Mixed })
  reportData: ReportDetails;

  // Almacena la fecha como UTC
  @Prop({ default: () => dateService.toUTC(new Date()) })
  createdAt: Date;
  /**
   * Cuando necesites mostrar la fecha, utiliza dateService.formatDateForDisplay(savedAudit.createdAt) 
   * para mostrarla en tu zona horaria local.
   */
}

export const ReportSchema = SchemaFactory.createForClass(Report);
