import { Module } from '@nestjs/common';
import { GoogleApiController } from './google-api.controller';
import { GoogleApiService } from './google-api.service';

@Module({
  controllers: [GoogleApiController],
  providers: [GoogleApiService]
})
export class GoogleApiModule {}
