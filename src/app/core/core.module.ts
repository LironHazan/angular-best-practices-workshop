import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [ HeaderComponent, FooterComponent],
  exports: [ HeaderComponent, FooterComponent ]
})
export class CoreModule { }
