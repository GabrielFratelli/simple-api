import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from '../env';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      config.mongoUrl, // aqui vem a váriavel de ambiente
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
