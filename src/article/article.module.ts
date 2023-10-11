/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './models/article.model';
import { ArticleMutationsResolver } from './resolvers/articlce.mutations.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [ArticleService, ArticleMutationsResolver],
})
export class ArticleModule { }
