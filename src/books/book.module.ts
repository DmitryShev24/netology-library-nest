import { Module } from '@nestjs/common';
import { BooksController } from './book.controller';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],

  controllers: [BooksController],
  providers: [BooksService],
})
export class BookModule {}
