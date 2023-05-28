import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LockScrollBodyService {
  changeStatus() {
    document.body.classList.toggle('lock-scroll');
  }
}
