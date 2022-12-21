import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { NotificationsController } from './app.controller';
import { NotificationService } from './application/notification/notification.service';

@Module({
  imports: [],
  controllers: [
    NotificationsController
  ],
  providers: [
    PrismaService,
    NotificationService
  ],
})
export class AppModule { }
