import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @ViewChild('container') container!: ElementRef<HTMLInputElement>;

  readonly skills: { name: string; icon: string; isColored?: false }[] = [
    { name: 'AWS', icon: 'amazonwebservices-plain-wordmark' },
    { name: 'Angular', icon: 'angularjs-plain' },
    { name: 'Handlebars', icon: 'handlebars-plain' },
    { name: 'Docker', icon: 'docker-plain' },
    { name: 'HTML 5', icon: 'html5-plain' },
    { name: 'CSS 3', icon: 'css3-plain' },
    { name: 'JavaScript', icon: 'javascript-plain' },
    { name: 'TypeScript', icon: 'typescript-plain' },
    { name: 'Jest', icon: 'jest-plain' },
    { name: 'GraphQL', icon: 'graphql-plain' },
    { name: 'Git', icon: 'git-plain' },
    { name: 'React', icon: 'react-original' },
    { name: 'NodeJs', icon: 'nodejs-plain' },
    { name: 'BitBucket', icon: 'bitbucket-original' },
    { name: 'Linux', icon: 'linux-plain' },
    { name: 'MySQL', icon: 'mysql-plain', isColored: false },
    { name: 'PostgreSQL', icon: 'postgresql-plain', isColored: false },
    { name: 'Python', icon: 'python-plain' },
  ];

  getIconClass(skill: (typeof this.skills)[number]) {
    return `devicon-${skill.icon} ${
      skill.isColored === false ? '' : 'colored'
    }`;
  }
}
