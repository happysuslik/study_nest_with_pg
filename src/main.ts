import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const viewsDirectory = config.get<string>('templates.path');
  const publicDirectory = config.get<string>('public.path');

  app.setViewEngine('hbs');
  app.useStaticAssets(publicDirectory);
  app.setBaseViewsDir(viewsDirectory);

  await app.listen(3000);
}
bootstrap();
