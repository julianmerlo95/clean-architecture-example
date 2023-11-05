import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const BASE_PATH = 'api';
const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(BASE_PATH);
  await app.listen(PORT);
}

bootstrap();
