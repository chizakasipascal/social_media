/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ArticleCreateInput, ArticleCreateOutput } from './dto/article-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './models/article.model';
import { Repository } from 'typeorm';
import { ArticleUpdateInput, ArticleUpdateOutput } from './dto/article-update.dto';
import { ArticleDeleteOutput } from './dto/article-delete.dto';

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>
    ) { }

    async createArticle(input: ArticleCreateInput): Promise<ArticleCreateOutput> {
        const article = this.articleRepository.create(input);
        await article.save();
        return { article }

    }


    async updateArticle(articleId: Article['id'],
        input: ArticleUpdateInput): Promise<ArticleUpdateOutput> {
        const article = await this.articleRepository.findOneByOrFail({
            id: articleId // where "id" is your primary column name
        });
        // findOneOrFail(articleId);
        article.title = input.title;
        article.description = input.description;
        article.image = input.image;
        await article.save();
        return { article }

    }


    async updateDelete(
        articleId: Article['id'],
    ): Promise<ArticleDeleteOutput> {
        const article = await this.articleRepository.findOneByOrFail({
            id: articleId
        });
        await article.remove();
        return { articleId }

    }


    async articlesList(): Promise<Article[]> {
        return this.articleRepository.find();
    }

}
