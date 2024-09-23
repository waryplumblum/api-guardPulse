import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const AuditSchema = SchemaFactory.createForClass(Audit);
