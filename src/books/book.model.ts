import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  public _id: string;

  @Prop({ required: true })
  public title: string;

  @Prop({ required: true })
  public description: string;

  @Prop({ required: true })
  public authors: [string];

  @Prop({ required: true })
  public favorite: string;

  @Prop({ required: true })
  public fileCover: string;

  @Prop({ required: true })
  public fileName: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
