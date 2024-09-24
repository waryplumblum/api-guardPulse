import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ReportDetails } from '../interfaces/reportDetails.interface.js';
@Schema()
export class Report extends Document {
  @Prop({ required: true })
  auditId: string;

  @Prop({ type: MongooseSchema.Types.Mixed }) // O bien puedes definir un esquema más específico si lo prefieres
  reportData: ReportDetails;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
