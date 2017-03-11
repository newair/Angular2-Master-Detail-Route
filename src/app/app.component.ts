import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav>
    <a routerLink="/menu1" routerLinkActive="active">Menu 1</a>
    <a routerLink="/menu2" routerLinkActive="active">Menu 2</a>
    <a routerLink="/menu3" routerLinkActive="active">Menu 3</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
