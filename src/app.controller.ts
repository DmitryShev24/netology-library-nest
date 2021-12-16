import { Controller, Get } from '@nestjs/common';
import { IBook } from './books/book';
import { BooksService } from './books/books.service';

@Controller()
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getHello(): IBook[] {
    return this.bookService.getBooks();
  }
}
