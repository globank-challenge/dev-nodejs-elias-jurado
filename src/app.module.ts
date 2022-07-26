import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryModule } from './repository/repository.module';
require('dotenv').config();

@Module({
  controllers: [],
  providers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'cockroachdb',
      host: process.env.DB_HOST,
      port: 26257,
      username: process.env.DB_USER,
      ssl: true,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      extra: {
        options: `--cluster=${process.env.DB_CLUSTER}`,
      },
      synchronize: false,
    }),
    RepositoryModule,
  ],
})
export class AppModule {}
