import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import userDTO from './interfaces/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  async createUser(@Body() user: userDTO) {
    const create = await this.appService.createUserService(user);
    return create;
  }

  @Get('user')
  async readUser() {
    const read = await this.appService.readUserService();
    return read;
  }

  @Put('user/:id')
  async updateUser(@Param('id') id: number, @Body() user: userDTO) {
    const update = await this.appService.updateUserService(Number(id), user);
    return update;
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: number) {
    const deleteId = await this.appService.deleteUser(+id);
    return deleteId;
  }
}
