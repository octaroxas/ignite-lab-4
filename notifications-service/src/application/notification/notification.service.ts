import { PrismaService } from './../../prisma.service';
import { Body, Controller, Get, Injectable, Param } from '@nestjs/common';
import { randomUUID } from 'node:crypto'

interface INotification {
    recipientId: string,
    content: string,
    category: string,
    createdAt?: Date,
    readAt?: Date
}

@Controller()
export class NotificationService {
    constructor(private readonly prisma: PrismaService) { }

    async all() {
        return await this.prisma.notification.findMany();
    }

    async create(@Body() dataNotification: INotification) {
        return this.prisma.notification.create({
            data: {
                id: randomUUID(),
                ...dataNotification
            }
        });
    }

    async show(@Param('id') id: string) {
        return await this.prisma.notification.findUnique({
            where: { id: id }
        });
    }
}