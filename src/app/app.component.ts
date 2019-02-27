import { Component } from '@angular/core';
import {ThemeService} from './shared/theming/theme.service';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  activeThem = 'oceanBlueThemProps';
  constructor(private themService: ThemeService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  toggleTheme() {
    if (this.activeThem !== 'deepPurpleThemProps') {
      this.themService.setActiveThem('deepPurpleThemProps');
      this.activeThem = 'deepPurpleThemProps';
    } else {
      this.themService.setActiveThem('oceanBlueThemProps');
      this.activeThem = 'oceanBlueThemProps';
    }
  }
}
