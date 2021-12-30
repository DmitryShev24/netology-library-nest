import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export interface SigninRequestDto {
  id: string;
  email: string;
  firstName: string;
  password: string;
}

const JWT_SECRET: string = process.env.JWT_SECRET;

@Injectable()
export class SigninService {
  public singin({ email, password }: SigninRequestDto) {
    const user = { id: 1, email, password };

    return {
      id: user.id,
      token: jwt.sign(
        { id: user.id, email: user.email, firstName: user.id },
        JWT_SECRET,
      ),
    };
  }

  public getUserByName(name: string) {
    const user = { id: 1, roles: ['admin'], password: 'password' };
    return user;
  }
}
