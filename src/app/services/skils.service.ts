import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkilsService {
  private readonly skils: { name: string; icon: string; link: string }[] = [];

  constructor() {}
}
