import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  @Get()
  findAll() {
    return 'جميع الغرف';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `غرفة برقم ${id}`;
  }

  @Post()
  create(@Body() dto: any) {
    return 'تم إضافة غرفة';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return `تم تعديل الغرفة ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `تم حذف الغرفة ${id}`;
  }
}