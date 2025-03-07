import { Injectable } from '@nestjs/common';

@Injectable()
export class ShapeService {
  createSquare(sideLength: number): {
    type: string;
    sideLength: number;
    area: number;
    perimeter: number;
  } {
    const area = sideLength * sideLength;
    const perimeter = 4 * sideLength;
    return {
      type: 'square',
      sideLength,
      area,
      perimeter,
    };
  }

  createRectangle(
    width: number,
    height: number,
  ): {
    type: string;
    width: number;
    height: number;
    area: number;
    perimeter: number;
  } {
    const area = width * height;
    const perimeter = 2 * (width + height);
    return {
      type: 'rectangle',
      width,
      height,
      area,
      perimeter,
    };
  }

  createCircle(radius: number): {
    type: string;
    radius: number;
    area: number;
    circumference: number;
  } {
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    return {
      type: 'circle',
      radius,
      area,
      circumference,
    };
  }
}
