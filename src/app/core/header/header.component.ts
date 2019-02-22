import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header> <ng-content></ng-content> </header>`,
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent  {
}
