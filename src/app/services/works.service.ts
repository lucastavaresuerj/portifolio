import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  private readonly works: { company: string; image: string; link: string }[] = [
    { company: 'Tokenlab', image: 'todo', link: 'also todo' },
  ];

  constructor() {}
}
