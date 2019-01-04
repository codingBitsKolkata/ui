import { NgModule } from '@angular/core';
import { PropertyRoutingModule } from './property-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PropertyComponent } from './property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

@NgModule({
  declarations: [PropertyComponent, PropertyDetailsComponent],
  imports: [
    PropertyRoutingModule,
    SharedModule
  ]
})
export class PropertyModule { }
