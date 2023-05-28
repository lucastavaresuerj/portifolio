import { Component, Input } from '@angular/core';

export type Contact = {
  icon: string;
  info: string;
  type: 'link' | 'email' | 'phone';
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contacts!: Contact[];

  getHref(contact: (typeof this.contacts)[number]) {
    if (contact.type === 'email') {
      return `mailto:${contact.info}`;
    }
    return contact.info;
  }
}
