import { Observable } from 'rxjs';

export interface Modal {
  status: Observable<'open' | 'close'>;
  data: any;
  isOpen: boolean;

  close: () => void;

  open: () => void;
}
