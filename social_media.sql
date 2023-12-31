# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type Article {
  id: ID!
  title: String!
  description: String!
  image: String!
}

type ArticleCreateOutput {
  article: Article!
}

type ArticleUpdateOutput {
  article: Article!
}

type ArticleDeleteOutput {
  articleId: ID!
}

type Query {
  sayHello: String!
  articlesList: [Article!]!
}

type Mutation {
  articleCreate(input: ArticleCreateInput!): ArticleCreateOutput!
  articleUpdate(articleId: ID!, input: ArticleUpdateInput!): ArticleUpdateOutput!
  articleDelete(articleId: ID!): ArticleDeleteOutput!
}

input ArticleCreateInput {
  title: String!
  description: String!
  image: String!
}

input ArticleUpdateInput {
  title: String!
  description: String!
  image: String!
}