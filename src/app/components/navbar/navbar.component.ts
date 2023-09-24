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
    { name: 'Home', path: '#' },
    { name: 'Works', path: '#works' },
    { name: 'Projects', path: '#projects' },
    { name: 'Certificates', path: '#certificate' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' },
  ];

  constructor(private lockScrollBodyService: LockScrollBodyService) {}

  changeStatus() {
    this.openStatus = !this.openStatus;
    this.lockScrollBodyService.changeStatus();
  }
}
