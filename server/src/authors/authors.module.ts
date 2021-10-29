import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from './Authors.controller';
import { AuthorsService } from './Authors.service';
import { Author, AuthorSchema } from './schemas/author.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule { }
