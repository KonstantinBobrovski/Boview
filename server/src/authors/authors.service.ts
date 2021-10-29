import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author, AuthorDocument } from './schemas/author.schema';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Injectable()
export class AuthorsService {

    constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) {

    }

    async create(createAuthorDto: CreateAuthorDTO): Promise<Author> {
        const createdAuthor = new this.authorModel(createAuthorDto);
        return createdAuthor.save();
    }

    async findAll(): Promise<Author[]> {
        return this.authorModel.find().exec();
    }

    async LolDo(): Promise<void> {
        const names = ['Evgeni', 'Valera', 'Kostya', 'Ivan', 'Gaby',]
        const dtos: CreateAuthorDTO[] = [];

        for (let index = 0; index < 20; index++) {

            const author = new CreateAuthorDTO();
            author.name = names[Math.floor(Math.random() * names.length)]
            author.biography = 'Biogra'
            author.born = new Date()
            dtos.push(author)

        }
        dtos.map(async (dto) => {
            const createdAuthor = new this.authorModel(dto);
            const r = await createdAuthor.save();
        })
        return;
    }

}
