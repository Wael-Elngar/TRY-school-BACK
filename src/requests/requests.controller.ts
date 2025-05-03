import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  // طلبات الصيانة
  @Post('maintenance')
  @ApiOperation({ summary: 'رفع طلب صيانة' })
  @ApiResponse({ status: 201, description: 'تم إنشاء طلب الصيانة بنجاح' })
  createMaintenanceRequest(@Body() dto: any) {
    return 'تم إنشاء طلب صيانة جديد';
  }

  @Get('maintenance')
  @ApiOperation({ summary: 'جلب طلبات الصيانة' })
  getMaintenanceRequests() {
    return 'قائمة طلبات الصيانة';
  }

  // طلبات الشراء
  @Post('purchase')
  @ApiOperation({ summary: 'رفع طلب شراء' })
  @ApiResponse({ status: 201, description: 'تم إنشاء طلب الشراء بنجاح' })
  createPurchaseRequest(@Body() dto: any) {
    return 'تم إنشاء طلب شراء جديد';
  }

  @Get('purchase')
  @ApiOperation({ summary: 'جلب طلبات الشراء' })
  getPurchaseRequests() {
    return 'قائمة طلبات الشراء';
  }

  // طلبات التركيب
  @Post('installation')
  @ApiOperation({ summary: 'رفع طلب تركيب' })
  @ApiResponse({ status: 201, description: 'تم إنشاء طلب التركيب بنجاح' })
  createInstallationRequest(@Body() dto: any) {
    return 'تم إنشاء طلب تركيب جديد';
  }

  @Get('installation')
  @ApiOperation({ summary: 'جلب طلبات التركيب' })
  getInstallationRequests() {
    return 'قائمة طلبات التركيب';
  }
}