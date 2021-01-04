import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextModule } from './next/next.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.get(NextModule).prepare().then(()=>{
    app.listen(3000);
  })
}
bootstrap();
