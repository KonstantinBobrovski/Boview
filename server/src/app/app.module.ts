/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import path from 'path';


@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../../', 'client','build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
