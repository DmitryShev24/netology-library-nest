import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ExceptionsFilter } from '@nestjs/core/router/interfaces/exceptions-filter.interface';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.getStatus();
    const errorMessage = exception.message;

    response.status(statusCode).json({
      timestamp: new Date().toISOString(),
      status: 'fail',
      data: exception,
      code: statusCode | HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
