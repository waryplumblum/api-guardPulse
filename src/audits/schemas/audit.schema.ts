import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DateService } from '../../utils/date.service.js';

// Instancias:
const dateService = new DateService();

@Schema()
export class Audit extends Document {
  @Prop({ required: true })
  url: string;

  @Prop()
  seoScore: number;

  @Prop()
  performanceScore: number;

  @Prop()
  accessibilityScore: number;

  // Almacena la fecha como UTC
  @Prop({ default: () => dateService.toUTC(new Date()) }) 
  createdAt: Date;
    /**
   * Cuando necesites mostrar la fecha, utiliza dateService.formatDateForDisplay(savedAudit.createdAt) 
   * para mostrarla en tu zona horaria local.
   */

  @Prop({ type: String, ref: 'Report' })
  reportId: string; 
}

export const AuditSchema = SchemaFactory.createForClass(Audit);
