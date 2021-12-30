import {
  Body,
  Controller,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from './jwt.auth.guard';
import { SigninService } from './signin.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signinService: SigninService,
    private readonly signupService: AuthService,
  ) {}

  @Post('passport/signup')
  public signup(@Request() req, @Body() body) {
    return this.signupService.signup(body);
  }

  @Post('passport/signin')
  @UseGuards(JwtAuthGuard)
  public signin(@Request() req, @Body() body) {
    return req.user;
  }
}
