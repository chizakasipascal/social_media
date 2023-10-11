import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    // eslint-disable-next-line prettier/prettier
    getHello(): string {
        return 'Hello World!';
    }
}
