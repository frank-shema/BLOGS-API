import { Controller, Get, Query } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Controller('crazy')
export class CrazyController {
  // Random jokes array for fun
  private jokes: string[] = [
    "Why don't skeletons fight each other? They don't have the guts.",
    'I told my wife she was drawing her eyebrows too high. She looked surprised.',
    "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
    "Why don't programmers like nature? It has too many bugs.",
  ];

  // Function to check if a number is prime
  isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Endpoint that combines random jokes, prime checking, and delays
  @Get('check-number')
  checkNumber(@Query('num') num: number): Observable<any> {
    if (!num || isNaN(num)) {
      return of({ message: 'Please provide a valid number!' }).pipe(
        delay(1000),
        map((response) => response),
      );
    }

    const randomJoke =
      this.jokes[Math.floor(Math.random() * this.jokes.length)];
    const primeStatus = this.isPrime(num) ? 'prime' : 'not prime';

    return of({
      number: num,
      isPrime: primeStatus,
      joke: randomJoke,
      timestamp: new Date().toISOString(),
    }).pipe(
      delay(2000), // Adding a small delay for fun!
      map((response) => {
        return {
          ...response,
          message: `Here's your result after a tiny wait!`,
        };
      }),
    );
  }
}
