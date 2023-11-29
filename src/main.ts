import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nest Mongo Swagger API')
    .setDescription('API para gestionar usuarios con MongoDB y Swagger')
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Books')
    .addBearerAuth()
    //.addSecurity('basic',{type:'http', scheme:'basic'})
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
