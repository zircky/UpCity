import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: path};
  }
}
