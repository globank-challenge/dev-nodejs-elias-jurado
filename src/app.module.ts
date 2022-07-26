import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
  ],
})
export class AppModule {}
