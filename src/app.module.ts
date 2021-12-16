import { Module } from '@nestjs/common';
import { BooksController } from './app.controller';
import { BooksService } from './books/books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BookModule {}
