import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Card } from './components/cards/cards.component';
import { Contact } from './components/contact/contact.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.setViewRef(this.viewContainerRef);
  }

  title = 'new-portifolio';

  works: Card[] = [
    {
      title: 'Tokenlab',
      image: './assets/work/mask-tokenlab-icon-scaled.png',
      description:
        "Where I internship as fullstack developer. It's a brazilian company that build software on demand",
      site: 'https://www.tokenlab.com.br/pt/home',
      fit: true,
    },
  ];

  projects: Card[] = [
    {
      title: 'Portifolio',
      image: './assets/project/portifolio-scaled.png',
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

  certificates: Card[] = [
    {
      title: 'AWS Certified Cloud Practitioner',
      image: './assets/certificates/aws-certified-cloud-practitioner.png',
      description:
        'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.',
      fit: true,
      site: 'https://www.credly.com/earner/earned/badge/133ee89f-3ddb-4972-ab47-3abb559f8ef2',
    },
  ];

  contact: Contact[] = [
    {
      type: 'link',
      icon: 'linkedin',
      info: 'https://www.linkedin.com/in/lucas-tavares-08581920a/',
    },
    {
      type: 'link',
      icon: 'github',
      info: 'https://github.com/lucastavaresuerj',
    },
    {
      type: 'email',
      icon: 'email',
      info: 'lucas.spo.tavares@gmail.com',
    },
  ];
}
