import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'your-email@gmail.com', pass: 'your-password' },
  });

  async sendNewsletter(subscribers: string[], post: any) {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: subscribers.join(','),
      subject: `New Blog Post: ${post.title}`,
      html: `<h1>${post.title}</h1><p>${post.content}</p><a href="${post.link}">Read More</a>`,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
