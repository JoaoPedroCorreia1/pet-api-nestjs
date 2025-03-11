import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PetClass extends Document {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  description: string;
}

export const PetSchema = SchemaFactory.createForClass(PetClass);