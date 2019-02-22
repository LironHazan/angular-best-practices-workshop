import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialCdkModule} from './ui-components/material-cdk.module';
import { NiceInputComponent } from './nice-input/nice-input.component';

@NgModule({
  imports:      [ CommonModule, MaterialCdkModule],
  declarations: [  NiceInputComponent],
  exports: [ MaterialCdkModule, NiceInputComponent ]
})
export class SharedModule { }
