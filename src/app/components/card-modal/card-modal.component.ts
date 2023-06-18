import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Card } from '../cards/cards.component';
import { Modal } from '../../services/modal.interface';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements Modal, OnChanges {
  @Input() data!: Card;
  @Input() isOpen = false;
  private _status: EventEmitter<'open' | 'close'> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      this._status.next(changes['isOpen'].currentValue ? 'open' : 'close');
    }
  }

  get status() {
    return this._status.asObservable();
  }

  get buttons() {
    const keys: (keyof Card)[] = ['repo', 'demo', 'site'];
    const btns = Object.entries(this.data)
      ?.filter(([key]) => keys.includes(key as keyof Card))
      .reduce(
        (acc, [key, value]) => [...acc, { linkType: key, value }],
        [] as { linkType: string; value: string }[]
      );
    return btns;
  }

  open() {
    this.isOpen = true;
    this._status.next('open');
  }

  close() {
    this.isOpen = false;
    this._status.next('close');
  }

  preventClose(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }
}
