import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';

@NgModule({
  declarations: [PropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
