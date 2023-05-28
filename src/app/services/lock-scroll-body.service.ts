import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LockScrollBodyService {
  changeStatus() {
    const body = document.getElementsByTagName(
      'body'
    )[0] as unknown as HTMLBodyElement;
    body.classList.toggle('lock-scroll');
  }
}
