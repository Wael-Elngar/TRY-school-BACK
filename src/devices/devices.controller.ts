import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('devices')
@Controller('devices')
export class DevicesController {
  @Get('maintenance/status')
  @ApiOperation({ summary: 'الأجهزة حسب حالة الصيانة' })
  @ApiQuery({ name: 'status', enum: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'] })
  getDevicesByMaintenanceStatus(@Query('status') status: string) {
    return `الأجهزة بحالة صيانة: ${status}`;
  }
}