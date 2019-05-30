import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstChildComponent} from './first-child/first-child.component';

const routes: Routes = [
  {
    path: 'awesomeness',
    loadChildren: () => import('./awesome-feature/awesome-feature.module').then(m => m.AwesomeFeatureModule),
    data: {animation: 'AwesomePage'}
  },
  { path: 'family', component: FirstChildComponent, data: {animation: 'FamilyPage'} },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
