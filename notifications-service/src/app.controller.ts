import { PrismaService } from './prisma.service';
import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto'

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  index() {
    return this.prisma.notification.findMany()
  }

  @Post('/notifications')
  async create() {
    await this.prisma.notification.create({
      data:{
        id: randomUUID(),
        recipientId:randomUUID(),
        content:'dedfef',
        category:'deee',
      }
    });
  }
}
