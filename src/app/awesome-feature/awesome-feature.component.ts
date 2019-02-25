import {Component} from '@angular/core';
import {HelloComponent} from './hello/hello.component';
import {ByeComponent} from './bye/bye.component';

@Component({
  selector: 'app-awesome-feature',
  template: `
    <h3> I'm a lazy module, see my bundle @ devtools-network</h3>
    <mat-slider></mat-slider>
    <button (click)="toggle()">Render dynamic component</button>
    <ng-container *ngComponentOutlet="currentComponent"></ng-container>
  `
})
export class AwesomeFeatureComponent {
  public currentComponent = HelloComponent;

  public toggle(): void {
    this.currentComponent = this.currentComponent === HelloComponent ? ByeComponent : HelloComponent;
  }
}
