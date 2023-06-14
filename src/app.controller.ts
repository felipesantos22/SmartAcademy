import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';
import userDTO from './interfaces/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  async createUser(@Body() user: userDTO) {
    const create = this.appService.createUserService(user);
    return create;
  }

  @Get('user')
  getHello(): Promise<User[]> {
    const read = this.appService.getAll();
    return read;
  }
}
