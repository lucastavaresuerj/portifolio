import { Component } from '@angular/core';
import { Card } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'new-portifolio';

  works: Card[] = [
    {
      title: 'Tokenlab',
      image: '../../assets/work/mask-tokenlab-icon.png',
      description:
        "Where I internship as fullstack developer. It's a brazilian company that build software on demand",
      site: 'https://www.tokenlab.com.br/pt/home',
    },
  ];

  projects: Card[] = [
    {
      title: 'Portifolio',
      image: '../../assets/project/portifolio.png',
      description:
        "This portifolio. It's build with angular and hosted with aws",
      repo: 'https://github.com/lucastavaresuerj/portifolio',
      site: 'https://www.lucas-tavares.com/',
    },
    // {
    //   title: 'Aws gallery',
    //   image: '',
    //   description: 'App that saves images',
    //   repo: 'https://github.com/lucastavaresuerj/gallery-aws/tree/main',
    // },
    // {
    //   title: 'Events calendar',
    //   image: '',
    //   description: 'App that saves images',
    //   repo: 'https://github.com/lucastavaresuerj/calendario-eventos/tree/master',
    // },
  ];
}
