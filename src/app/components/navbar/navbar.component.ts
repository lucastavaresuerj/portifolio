import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly menus: { name: string; path: string }[] = [
    { name: 'Home', path: '' },
    { name: 'Projects', path: '' },
    { name: 'Skils', path: '' },
    { name: 'Works', path: '' },
    { name: 'Contact', path: '' },
  ];
}
