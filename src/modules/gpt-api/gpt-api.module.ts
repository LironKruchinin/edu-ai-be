import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { GptApiController } from './gpt-api.controller';
import { GptApiService } from './gpt-api.service';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 90000,
      limit: 2000
    })
  ],
  controllers: [GptApiController],
  providers: [GptApiService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],

})
export class GptApiModule { }
