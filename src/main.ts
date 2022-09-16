import { NestFactory } from '@nestjs/core';
import { RadarModule } from './radar/radar.module';

async function bootstrap() {
  const app = await NestFactory.create(RadarModule);
  await app.listen(3005);
}
bootstrap();
