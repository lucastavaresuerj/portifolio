import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  readonly skills: { name: string; icon: string }[] = [
    { name: 'Docker', icon: 'docker-plain' },
    { name: 'HTML 5', icon: 'html5-plain' },
    { name: 'TypeScript', icon: 'typescript-plain' },
    { name: 'Git', icon: 'git-plain' },
    { name: 'React', icon: 'react-original' },
  ];

  getIconClass(skill: (typeof this.skills)[number]) {
    return `devicon-${skill.icon} colored`;
  }
}
