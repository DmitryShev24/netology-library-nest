import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './books/book.module';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING!),
    BookModule,
  ],
})
export class AppModule {}
