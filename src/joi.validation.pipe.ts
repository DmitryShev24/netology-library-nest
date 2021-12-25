import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: any) {}
  public transform(incomeValues: any, metadata: ArgumentMetadata): any {
    const { error, value } = this.schema.validate(incomeValues);
    this.getError(error);

    return value;
  }
  private getError(error: any) {
    if (error) {
      throw new BadRequestException({
        DETAILS: `${error.details[0].message}`,
        EN: 'valid error',
      });
    }
  }
}
