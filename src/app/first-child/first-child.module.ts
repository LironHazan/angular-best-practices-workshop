import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FirstChildComponent} from './first-child.component';
import {FirstGrandchildComponent} from './first-grandchild/first-grandchild.component';
import {FirstGranddaughterComponent} from './first-granddaughter/first-granddaughter.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
],
  declarations: [
    FirstChildComponent,
    FirstGrandchildComponent,
    FirstGranddaughterComponent ],
  exports: [FirstChildComponent]
})
export class FirstChildModule { }
