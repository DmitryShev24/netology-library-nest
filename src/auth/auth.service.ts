import { Injectable } from '@nestjs/common';
import { SigninService } from './signin.service';
import * as jwt from 'jsonwebtoken';

require('dotenv').config();
const JWT_SECRET: string = process.env.JWT_SECRET;

@Injectable()
export class AuthService {
  private users = [];
  constructor(private readonly signinService: SigninService) {}

  public signup(data: any) {
    const token = jwt.sign(
      {
        id: 1,
        email: data.email,
        firstName: data.firstName,
      },
      JWT_SECRET,
    );

    const user = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      jwt: token,
    };

    this.users.push(user);

    console.log('test', JWT_SECRET);

    return token;
  }

  public async validateUser(name: string, password: string) {
    const user = await this.signinService.getUserByName(name);

    // сравнить хэши
    if (user && user.password === password) {
      const { password: userPassword, ...result } = user;

      return result;
    }

    return null;
  }
}
