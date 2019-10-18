import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {CONFIG} from './config/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewsDirectory = CONFIG.templates.path;
  const publicDirectory = CONFIG.public.path;

  app.setViewEngine('hbs');
  app.useStaticAssets(publicDirectory);
  app.setBaseViewsDir(viewsDirectory);

  await app.listen(3000);
}
bootstrap();
