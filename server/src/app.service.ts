import { Injectable } from '@nestjs/common';


let dir = __dirname
@Injectable()
export class AppService {
  getHello(): string {
    return dir;
  }
}
