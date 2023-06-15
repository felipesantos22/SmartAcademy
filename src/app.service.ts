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

  async readUserService() {
    const read = await this.prisma.user.findMany();
    return read;
  }

  async updateUserService(id: number, user: userDTO) {
    const update = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...user,
      },
    });
    return update;
  }

  async deleteUser(id: number) {
    const deleteId = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return deleteId;
  }
}
