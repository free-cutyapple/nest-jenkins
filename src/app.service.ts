import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World cutyapple! 1234';
  }

  a() {
    return 11;
  }
}
