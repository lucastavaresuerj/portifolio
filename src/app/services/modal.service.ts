import { EventEmitter, Injectable } from '@angular/core';
import { Card } from '../components/cards/cards.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _card!: Card;
  private _status: EventEmitter<'open' | 'close'> = new EventEmitter();

  constructor() {}

  get card() {
    return this._card;
  }

  get staus() {
    return this._status.asObservable();
  }

  open(card: Card) {
    this._card = card;
    this._status.emit('open');
  }

  close() {
    this._status.emit('close');
  }
}
