import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const APP_DIRECTORY = resolve(__dirname, '..');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve(APP_DIRECTORY, 'public'));
  app.setBaseViewsDir(resolve(APP_DIRECTORY, 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
