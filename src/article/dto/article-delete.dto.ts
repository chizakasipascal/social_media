// eslint-disable-next-line prettier/prettier
/* eslint-disable prettier/prettier */

import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Article } from "../models/article.model";

@ObjectType()
export class ArticleDeleteOutput {
    @Field(() => ID)
    articleId: Article['id']

}