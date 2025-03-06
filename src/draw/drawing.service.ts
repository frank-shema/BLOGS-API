import { Injectable } from '@nestjs/common';
import { createCanvas } from 'canvas';
import { Response } from 'express';

@Injectable()
export class DrawingService {
  drawCircle(res: Response) {
    const width = 500;
    const height = 500;

    // Create a canvas instance
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    // Set the background color
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // Draw a circle
    context.beginPath();
    context.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
    context.fillStyle = 'blue';
    context.fill();
    context.stroke();

    // Send the image as PNG
    res.setHeader('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res);
  }
}
