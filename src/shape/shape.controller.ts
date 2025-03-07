import { Controller, Get, Query } from '@nestjs/common';
import { ShapeService } from './shape.service';

@Controller('shape')
export class ShapeController {
  constructor(private readonly shapeService: ShapeService) {}

  @Get('square')
  createSquare(@Query('sideLength') sideLength: number) {
    return this.shapeService.createSquare(Number(sideLength));
  }

  @Get('rectangle')
  createRectangle(
    @Query('width') width: number,
    @Query('height') height: number,
  ) {
    return this.shapeService.createRectangle(Number(width), Number(height));
  }

  @Get('circle')
  createCircle(@Query('radius') radius: number) {
    return this.shapeService.createCircle(Number(radius));
  }
}
