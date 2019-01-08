import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../../shared/shared.module';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import { OnewayComponent } from './oneway/oneway.component';
import { RoundtripComponent } from './roundtrip/roundtrip.component';
import { MulticityComponent } from './multicity/multicity.component';

@NgModule({
  declarations: [
    FlightComponent,
    OnewayComponent, 
    RoundtripComponent, 
    MulticityComponent
  ],
  imports: [
    FlightRoutingModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class FlightModule { }
