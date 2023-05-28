import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

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

  constructor(private modalService: ModalService) {}

  openModal(card: (typeof this.cards)[number]) {
    this.modalService.open(card);
  }
}
