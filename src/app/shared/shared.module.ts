import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialCdkModule} from './ui-components/material-cdk.module';
import { NiceInputComponent } from './nice-input/nice-input.component';
import { ThemeDirective } from './theme.directive';

@NgModule({
  imports:      [ CommonModule,
    FormsModule,
    MaterialCdkModule],
  declarations: [  NiceInputComponent,
    ThemeDirective],
  exports: [ MaterialCdkModule,
    NiceInputComponent,
    ThemeDirective ]
})
export class SharedModule { }
