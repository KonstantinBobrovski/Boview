import { Controller, Post, Get } from '@nestjs/common';
import { AuthorsService } from './Authors.service';
@Controller('authors')
export class AuthorsController {

    constructor(private authorsService: AuthorsService) { }

    @Get('createPost')
    createPost() {
       return this.authorsService.LolDo();
    }

    @Get('getAll')
    async getAll() {
       return await this.authorsService.findAll();
    }

}
