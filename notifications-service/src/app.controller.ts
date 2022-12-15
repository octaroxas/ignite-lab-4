import { PrismaService } from './prisma.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany()
  }
}
