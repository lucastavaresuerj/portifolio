import {
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Modal } from './modal.interface';
import { CardModalComponent } from '../components/card-modal/card-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _viewRef!: ViewContainerRef;
  private _componentRef!: ComponentRef<Modal>;

  get data() {
    return { ...this._componentRef.instance.data } as const;
  }

  get status() {
    return this._componentRef.instance.status;
  }

  set data(data: typeof this._componentRef.instance.data) {
    this._componentRef.setInput('data', data);
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
    // this.status.subscribe
  }

  close() {
    this._componentRef.instance.close();
  }
}
