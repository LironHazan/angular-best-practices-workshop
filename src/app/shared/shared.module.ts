import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialCdkModule} from './ui-components/material-cdk.module';
import { NiceInputComponent } from './nice-input/nice-input.component';
import { ThemeDirective } from './theming/theme.directive';
import { SizePipe } from './pipes/size.pipe';
import { CatsComponent } from './cats/cats.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [ CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialCdkModule],
  declarations: [  NiceInputComponent,
    ThemeDirective,
    SizePipe,
    CatsComponent],
  exports: [ MaterialCdkModule,
    NiceInputComponent,
    CatsComponent,
    SizePipe,
    ThemeDirective ]
})
export class SharedModule { }
