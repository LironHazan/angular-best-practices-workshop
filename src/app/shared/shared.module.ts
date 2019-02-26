import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialCdkModule} from './ui-components/material-cdk.module';
import { NiceInputComponent } from './nice-input/nice-input.component';
import { ThemeDirective } from './theming/theme.directive';
import { SizePipe } from './pipes/size.pipe';

@NgModule({
  imports:      [ CommonModule,
    FormsModule,
    MaterialCdkModule],
  declarations: [  NiceInputComponent,
    ThemeDirective,
    SizePipe],
  exports: [ MaterialCdkModule,
    NiceInputComponent,
    SizePipe,
    ThemeDirective ]
})
export class SharedModule { }
