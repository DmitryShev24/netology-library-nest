import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { SigninService } from './signin.service';
import { JwtStrategy } from './jwt.strategy';

require('dotenv').config();

const JWT_SECRET: string = process.env.JWT_SECRET;

@Module({
  imports: [PassportModule, JwtModule.register({ secret: JWT_SECRET })],

  controllers: [AuthController],
  exports: [AuthService, SigninService],
  providers: [AuthService, SigninService, JwtStrategy],
})
export class AuthModule {}
