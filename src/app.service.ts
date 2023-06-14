import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import userDTO from './interfaces/user';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createUserService(user: userDTO) {
    const create = await this.prisma.user.create({
      data: {
        ...user,
      },
    });
    return create;
  }

  async getAll() {
    const read = await this.prisma.user.findMany();
    return read;
  }
}
