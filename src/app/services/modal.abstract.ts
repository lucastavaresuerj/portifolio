import { Observable } from 'rxjs';

export class Modal {
  status!: Observable<'open' | 'close'>;
  data!: any;
  isOpen!: boolean;

  close!: () => void;

  open!: () => void;
}
