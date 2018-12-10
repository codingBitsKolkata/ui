import { NgModule } from '@angular/core';
import { PropertyRoutingModule } from './property-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PropertyComponent } from './property.component';

@NgModule({
  declarations: [PropertyComponent],
  imports: [
    PropertyRoutingModule,
    SharedModule
  ]
})
export class PropertyModule { }
