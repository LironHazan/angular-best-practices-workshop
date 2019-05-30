import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import { AwesomeFeatureComponent } from './awesome-feature.component';
import {AwesomeRoutingModule} from './awesome-routing.module';
import {FooComponent} from './foo/foo.component';
import {TabOneViewComponent} from './tab-one-view/tab-one-view.component';
import {TabTwoViewComponent} from './tab-two-view/tab-two-view.component';
import {TabViewPortalComponent} from './tab-view-portal/tab-view-portal.component';

@NgModule({
  imports: [ CommonModule,
    SharedModule,
    AwesomeRoutingModule],
  declarations: [
    HelloComponent,
    ByeComponent,
    AwesomeFeatureComponent,
    FooComponent,
    TabOneViewComponent,
    TabTwoViewComponent,
    TabViewPortalComponent],
    entryComponents: [HelloComponent, ByeComponent],
})
export class AwesomeFeatureModule { }
