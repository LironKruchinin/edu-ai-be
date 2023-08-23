import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { GptApiModule } from './modules/gpt-api/gpt-api.module';
import { GoogleApiModule } from './modules/google-api/google-api.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
    GptApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
