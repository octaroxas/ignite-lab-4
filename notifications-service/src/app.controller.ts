import { NotificationService } from './application/notification/notification.service';
import { PrismaService } from './prisma.service';
import { Controller, Delete, Get, Param, Patch, Post, Request } from '@nestjs/common';

@Controller('api')
export class NotificationsController {
  // constructor(private readonly prisma: PrismaService) { }
  constructor(
    private readonly notificationService: NotificationService,
    private readonly prisma: PrismaService) { }

  @Get('/notifications')
  index() {
    return this.notificationService.all()
  }

  @Post('/notifications')
  async create(@Request() req: Request) {
    const { body } = req
    await this.notificationService.create({
      category: body['category'],
      recipientId: body['recipientId'],
      content: body['content'],
    });
  }


  @Get('/notifications/:id')
  async show(@Param('id') id: string) {
    return this.notificationService.show(id);
  }


  @Patch('/notifications/:id')
  async edit(@Param('id') id: string, @Request() request: Request) {
    await this.prisma.notification.update(
      {
        data: {
          content: 'testando edit',
          category: 'testando edit',
        },
        where: { id: id }
      }
    )
  }

  @Delete('/notifications/:id')
  async destroy(@Param('id') id: string) {
    await this.prisma.notification.delete({
      where: { id: id }
    })
  }
}
