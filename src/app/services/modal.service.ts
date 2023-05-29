import {
  ComponentRef,
  EventEmitter,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Card } from '../components/cards/cards.component';
import { Modal } from './modal.abstract';
import { CardModalComponent } from '../components/card-modal/card-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _viewRef!: ViewContainerRef;
  private _componentRef!: ComponentRef<Modal>;
  private _data!: Card | any;

  get data() {
    return { ...this._data } as const;
  }

  get status() {
    return this._componentRef.instance.status;
  }

  set data(data: Card) {
    this._componentRef.setInput('data', data ?? this._data);
  }

  createModal(modal: Type<Modal> = CardModalComponent) {
    this._componentRef = this._viewRef.createComponent(modal);
  }

  deleteModal() {
    this.close();
    this._componentRef.destroy();
  }

  setViewRef(viewRef: ViewContainerRef) {
    if (this._viewRef) throw new Error('ViewContainerRef already exists');
    this._viewRef = viewRef;
  }

  open() {
    this._componentRef.instance.open();
  }

  close() {
    this._componentRef.instance.close();
  }
}
