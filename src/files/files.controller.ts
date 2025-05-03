import { Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('files')
@Controller('files')
export class FilesController {
  @Post('upload')
  @ApiOperation({ summary: 'رفع ملف' })
  uploadFile() {
    return 'تم رفع الملف بنجاح';
  }

  @Get(':id')
  @ApiOperation({ summary: 'عرض ملف' })
  getFile(@Param('id') id: string) {
    return `عرض الملف ${id}`;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'حذف ملف' })
  deleteFile(@Param('id') id: string) {
    return `تم حذف الملف ${id}`;
  }
}