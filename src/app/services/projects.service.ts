import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly projects: {
    title: string;
    image?: string;
    description: string;
    repository: string;
    demo?: string;
  }[] = [
    {
      title: 'titulo  muito bom',
      description: 'Descrição muito boa',
      repository: 'git...',
    },
  ];

  constructor() {}
}
