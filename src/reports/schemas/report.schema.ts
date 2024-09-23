import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose'; // Importa Schema de mongoose

@Schema()
export class Report extends Document {
  @Prop({ required: true })
  auditId: string;

  @Prop({ type: MongooseSchema.Types.Mixed }) // Usa Schema de Mongoose
  reportData: any; // Puedes definir un tipo más específico según tus necesidades

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
