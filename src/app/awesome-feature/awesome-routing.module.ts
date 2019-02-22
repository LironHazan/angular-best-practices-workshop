import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomeFeatureComponent} from './awesome-feature.component';

const routes: Routes = [
  {
    path: '',
    component: AwesomeFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwesomeRoutingModule { }
