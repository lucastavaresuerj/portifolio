import { Component, Input } from '@angular/core';

export type Contact = { icon: string; info: string; type?: 'link' };

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contacts!: Contact[];
}
