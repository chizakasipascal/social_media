import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'social_media.sql',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('HOST'), // 'localhost',
        port: parseInt(ConfigService.get('POSTGRESS_PORT')), //5432,
        password: ConfigService.get('POSTGRESS_PASSWORD'), //'geek',
        username: ConfigService.get('POSTGRESS_USER'), //'postgres',
        // entities: [],
        entities: [join(__dirname, '**', '*.model.{ts,js}')],
        database: ConfigService.get('POSTGRESS_DATABASE'), //'social_media',
        synchronize: true,
        logging: true,
      }),
    }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
