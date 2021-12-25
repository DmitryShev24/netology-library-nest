import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res) => {
        res = { status: 'success', data: res };
        return res;
      }),
      catchError((err) => {
        const newErr = { status: 'fail', data: err };
        console.log(err);
        return throwError(new InternalServerErrorException(newErr));
      }),
    );
  }
}
