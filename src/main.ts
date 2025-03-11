import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from "./config/keys";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
