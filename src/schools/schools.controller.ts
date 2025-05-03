import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('schools')
@Controller('schools')
export class SchoolsController {
  @Get()
  findAll() {
    return 'جميع المدارس';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `مدرسة برقم ${id}`;
  }

  @Post()
  create(@Body() dto: any) {
    return 'تم إضافة مدرسة';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return `تم تعديل المدرسة ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `تم حذف المدرسة ${id}`;
  }

  @Get('filter/search')
  @ApiOperation({ summary: 'تصفية المدارس' })
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'location', required: false })
  filterSchools(@Query('name') name?: string, @Query('location') location?: string) {
    return `تصفية المدارس حسب: ${name || ''} ${location || ''}`;
  }
}