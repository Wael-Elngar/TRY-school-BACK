import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('floors')
@Controller('floors')
export class FloorsController {
  @Get()
  findAll() {
    return 'جميع الطوابق';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `طابق برقم ${id}`;
  }

  @Post()
  create(@Body() dto: any) {
    return 'تم إضافة طابق';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return `تم تعديل الطابق ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `تم حذف الطابق ${id}`;
  }
}