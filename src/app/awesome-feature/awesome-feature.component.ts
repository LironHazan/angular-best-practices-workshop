import {Component} from '@angular/core';
import {HelloComponent} from './hello/hello.component';
import {ByeComponent} from './bye/bye.component';

enum Tab {
  helloComp = 'helloComponent',
  byeComp = 'byeComponent',
}

@Component({
  selector: 'app-awesome-feature',
  template: `
    <h3> I'm a lazy module, see my bundle @ devtools-network</h3>
    <mat-slider></mat-slider>
    <button (click)="toggle()">Render dynamic component</button>
    <ng-container *ngComponentOutlet="currentComponent"></ng-container>
    <app-tab-view-portal>
      <app-tab-one-view *ngIf="selected === 'one'">
      </app-tab-one-view>
      <app-tab-two-view *ngIf="selected === 'two'">
      </app-tab-two-view>
      <div class="big-poop" *ngIf="selected === 'poop'">💩</div>
    </app-tab-view-portal>

    <app-nav-menu *ngFor="let section of sections">
      <button (click)="setSelected(section)"> {{section}}</button>
    </app-nav-menu>
    <hr>
    <app-foo></app-foo>
  `
})
export class AwesomeFeatureComponent {
  public currentComponent = HelloComponent;
  public selected;
  public sections = ['one', 'two', 'poop'];

  setSelected(name) {
    this.selected = name;
  }

  public toggle(): void {
    this.currentComponent = this.currentComponent === HelloComponent ? ByeComponent : HelloComponent;
  }
}
