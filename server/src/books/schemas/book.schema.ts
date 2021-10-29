import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Author } from '../../authors/schemas/author.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    title: string;

    @Prop()
    year: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
    author: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);
