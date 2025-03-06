import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { DrawingService } from './drawing.service';

@Controller('draw')
export class DrawingController {
  constructor(private readonly drawingService: DrawingService) {}

  @Get('circle')
  drawCircle(@Res() res: Response) {
    this.drawingService.drawCircle(res);
  }
}
