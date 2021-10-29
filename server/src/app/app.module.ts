/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { ServeStaticModule } from '@nestjs/serve-static';

import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from '../authors/authors.module';
import path from 'path';




@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthorsModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../../', 'client','build'),
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION)
  ]
})
export class AppModule { }
