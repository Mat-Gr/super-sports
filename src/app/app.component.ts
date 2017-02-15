import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <site-header></site-header>
        <router-outlet></router-outlet>
        <site-footer></site-footer>
    `,
})
export class AppComponent  { name = 'Angular'; }
