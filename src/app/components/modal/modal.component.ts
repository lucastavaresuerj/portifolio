import { Component, Input } from '@angular/core';
import { Card } from '../cards/cards.component';
import { ModalService } from 'src/app/services/modal.service';
import { LockScrollBodyService } from 'src/app/services/lock-scroll-body.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  cardInfo!: Card;

  isOpen = false;

  constructor(
    private modalService: ModalService,
    private lockScrollBodyService: LockScrollBodyService
  ) {
    modalService.staus.subscribe((status) => {
      if (status === 'open') {
        this.isOpen = true;
        this.cardInfo = modalService.card;
        lockScrollBodyService.changeStatus();
      } else this.isOpen = false;
    });
  }

  get buttons() {
    const keys: (keyof Card)[] = ['repo', 'demo', 'site'];
    return Object.entries(this.cardInfo)
      ?.filter(([key]) => keys.includes(key as keyof Card))
      .map(([, value]) => value);
  }

  close() {
    this.modalService.close();
    this.lockScrollBodyService.changeStatus();
  }
}
