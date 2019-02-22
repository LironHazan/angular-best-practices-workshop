import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HelloComponent } from './hello/hello.component';
import { ByeComponent } from './bye/bye.component';
import { AwesomeFeatureComponent } from './awesome-feature.component';
import {AwesomeRoutingModule} from './awesome-routing.module';

@NgModule({
  imports: [ CommonModule,
    SharedModule,
    AwesomeRoutingModule],
  declarations: [
    HelloComponent,
    ByeComponent,
    AwesomeFeatureComponent ],
    entryComponents: [HelloComponent, ByeComponent],
})
export class AwesomeFeatureModule { }
