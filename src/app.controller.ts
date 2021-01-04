import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { NextService } from './next/next.service';
import {Request, Response} from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly next: NextService
  ) {}

  @Get()
  getHello(@Req() req:Request, @Res() res: Response) {
    return this.next.render("/index", req, res);
  }
}
