import { Component, Input } from '@angular/core';

export type Card = {
  title: string;
  image: string;
  description: string;
  repo?: string;
  demo?: string;
  site?: string;
};

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() cards!: Card[];
}
