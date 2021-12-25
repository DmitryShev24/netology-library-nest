import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { IBook, IParamId } from './book';
import { BooksService } from './books.service';
import { Book, BookDocument } from './book.model';
import { LoggingInterceptor } from '../logging.interceptor';
import { ParseIntPipe } from '../parse.int.pipe';
import { JoiValidationPipe } from '../joi.validation.pipe';
import { createBookJoi } from '../create-book.joi';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  public create(
    @Body(new JoiValidationPipe(createBookJoi)) body: IBook,
  ): Promise<Book> {
    return this.bookService.createBook(body);
  }

  @Get()
  @UseInterceptors(LoggingInterceptor)
  public getAll(): Promise<BookDocument[]> {
    throw new Error();
    return this.bookService.getAll();
  }

  @Get()
  public findOneById(
    @Param('id', new ParseIntPipe()) id: number,
  ): BookDocument {
    return this.bookService.findOneById(id);
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
