import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  declarations: [ ],
  exports:      [ MatSliderModule ],
  entryComponents: []
})
export class MaterialCdkModule { }
