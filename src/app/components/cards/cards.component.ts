import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
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
  providers: [ModalService],
})
export class CardsComponent implements OnInit, OnDestroy {
  @Input() cards!: Card[];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private modalService: ModalService
  ) {}

  ngOnDestroy(): void {
    this.modalService.deleteModal();
  }

  ngOnInit(): void {
    this.modalService.setViewRef(this.viewContainerRef);
    this.modalService.createModal();
  }

  openModal(card: (typeof this.cards)[number]) {
    this.modalService.data = card;
    this.modalService.open();
  }
}
