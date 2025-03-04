import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

@Controller('blog')
export class BlogController {
  @Get(':id/download')
  async downloadPost(@Param('id') id: string, @Res() res: Response) {
    const post = {
      id,
      title: 'Sample Blog Post',
      content: '<p>This is a sample blog post for offline reading.</p>',
    };

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`<h1>${post.title}</h1>${post.content}`);

    const pdfPath = `./downloads/blog-${id}.pdf`;
    await page.pdf({ path: pdfPath, format: 'A4' });
    await browser.close();

    res.download(pdfPath, `blog-${id}.pdf`, () => {
      fs.unlinkSync(pdfPath);
    });
  }
}
