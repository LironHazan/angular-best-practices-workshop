import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialCdkModule} from './ui-components/material-cdk.module';
import { NiceInputComponent } from './nice-input/nice-input.component';
import { ThemeDirective } from './theming/theme.directive';
import { SizePipe } from './pipes/size.pipe';
import { CatsComponent } from './cats/cats.component';
import {HttpClientModule} from '@angular/common/http';
import { FormExampleComponent } from './form-example/form-example.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {PortalModule} from '@angular/cdk/portal';

@NgModule({
  imports:      [ CommonModule,
    FormsModule,
    HttpClientModule,
    PortalModule,
    MaterialCdkModule],
  declarations: [  NiceInputComponent,
    ThemeDirective,
    SizePipe,
    CatsComponent,
    FormExampleComponent,
    NavMenuComponent],
  exports: [ MaterialCdkModule,
    PortalModule,
    NiceInputComponent,
    CatsComponent,
    SizePipe,
    ThemeDirective,
    NavMenuComponent]
})
export class SharedModule { }
