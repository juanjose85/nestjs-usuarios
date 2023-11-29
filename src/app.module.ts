import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { SecuritySchemeObject,  ApiSecurity } from '@nestjs/swagger';
import { AuthModule } from './auth/auth.module';

const jwtScheme: SecuritySchemeObject = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    UsersModule,
    BooksModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

@ApiSecurity(jwtScheme)
export class AppModule {}
