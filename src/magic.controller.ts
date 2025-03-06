import { Controller, Get, Query } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Controller('magic')
export class MagicController {
  private responses: string[] = [
    'Yes, definitely!',
    'Ask again later.',
    'No way!',
    "I'm not sure, but probably.",
    'Absolutely not.',
    'Yes, but only if you believe!',
    "I'm afraid I can't answer that right now.",
    'The stars align for success.',
    'It is certain!',
    'Better not tell you now.',
  ];

  private fortuneCookies: string[] = [
    'A beautiful, smart, and loving person will be coming into your life.',
    'Your future is as bright as your heart.',
    'Now is the time to make a change.',
    'A journey of a thousand miles begins with a single step.',
    'You will soon discover a hidden talent.',
    'Your kindness will lead you to unexpected success.',
    'Big things are coming your way, be ready!',
  ];

  // Magic 8-ball-like response generator
  @Get('ask')
  askQuestion(@Query('question') question: string): Observable<any> {
    if (!question) {
      return of({ message: 'Please ask a question to the Magic 8-ball!' }).pipe(
        delay(500),
        map((response) => response),
      );
    }

    const response =
      this.responses[Math.floor(Math.random() * this.responses.length)];
    const fortune =
      this.fortuneCookies[
        Math.floor(Math.random() * this.fortuneCookies.length)
      ];

    return of({
      question,
      answer: response,
      fortune: fortune,
      timestamp: new Date().toISOString(),
    }).pipe(
      delay(1500), // Adding some delay for the "magical" feel!
      map((response) => {
        return {
          ...response,
          message: `The Magic 8-ball has spoken!`,
        };
      }),
    );
  }
}
