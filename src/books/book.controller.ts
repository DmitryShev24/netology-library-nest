import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IBook, IParamId } from './book';
import { BooksService } from './books.service';
import { Book, BookDocument } from './book.model';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  public create(@Body() body: IBook): Promise<Book> {
    return this.bookService.createBook(body);
  }

  @Get()
  getAll(): Promise<BookDocument[]> {
    return this.bookService.getAll();
  }

  @Put(':id') public update(
    @Param() { id }: IParamId,
    @Body() body: IBook,
  ): Promise<BookDocument> {
    return this.bookService.updateBook(id, body);
  }

  @Delete(':id') public delete(
    @Param() { id }: IParamId,
  ): Promise<BookDocument> {
    return this.bookService.delete(id);
  }
}
