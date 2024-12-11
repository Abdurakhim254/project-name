import { Controller, Delete, Get, Param, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':id')
  getId(@Param('id') id: string): number {
    return this.appService.getHelloByid(id);
  }
  @Post('data')
  getPost(@Body('data') data: any): any {
    console.log(data)
    return data
  }
}
