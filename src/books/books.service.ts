import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { IBook } from './book';
import { Book, BookDocument } from './book.model';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

interface CreateBookDto {
  title: Book['title'];
  description: Book['description'];
  authors: Book['authors'];
  favorite: Book['favorite'];
  fileCover: Book['fileCover'];
}

@Injectable()
export class BooksService {
  books: Array<IBook>;

  constructor(
    @InjectModel(Book.name)
    @InjectConnection()
    private bookModel: Model<BookDocument>,
  ) {}

  public createBook(data: IBook): Promise<Book> {
    const book = new this.bookModel(data);
    return book.save();
  }

  public updateBook(id: string, data: IBook): any {
    return this.bookModel.findOneAndUpdate({ _id: id }, data);
  }

  public delete(id: string): any {
    return this.bookModel.findOneAndRemove({ _id: id });
  }

  public getAll(): Promise<BookDocument[]> {
    return this.bookModel.find().exec();
  }

  public findOneById(id: number): any {
    return this.bookModel.findOne({ _id: id });
  }
}
