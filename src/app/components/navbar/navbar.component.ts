import { Component } from '@angular/core';
import { LockScrollBodyService } from 'src/app/services/lock-scroll-body.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  openStatus = false;

  readonly menus: { name: string; path: string }[] = [
    { name: 'Home', path: '' },
    { name: 'Projects', path: '' },
    { name: 'Skils', path: '' },
    { name: 'Works', path: '' },
    { name: 'Contact', path: '' },
  ];

  constructor(private lockScrollBodyService: LockScrollBodyService) {}

  changeStatus() {
    this.openStatus = !this.openStatus;
    this.lockScrollBodyService.changeStatus();
  }
}
