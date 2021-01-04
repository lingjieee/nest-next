import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NextModule } from './next/next.module';
import { NextMiddleware } from './next/next.middleware';

@Module({
  imports: [NextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  public configure(consumer: MiddlewareConsumer) {
    AppModule.handleAssets(consumer);
  }

  private static handleAssets(consumer: MiddlewareConsumer):void {
    consumer.apply(NextMiddleware)
      .forRoutes({
        path: '_next*',
        method: RequestMethod.GET
      })
  }
}
