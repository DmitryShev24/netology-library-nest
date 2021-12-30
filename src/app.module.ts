import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './books/book.module';
import { AuthModule } from './auth/auth.module';
import { SigninService } from './auth/signin.service';
import { AuthService } from './auth/auth.service';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING!),
    BookModule,
    AuthModule,
  ],
})
export class AppModule {}
