import { NgModule } from '@angular/core';
import { DesignRoutingModule } from './design-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HostListingComponent } from './host-listing/host-listing.component';

@NgModule({
  declarations: [HomeComponent, PropertyListComponent, HostListingComponent],
  imports: [
    DesignRoutingModule,
    SharedModule

  ]
})
export class DesignModule { }
