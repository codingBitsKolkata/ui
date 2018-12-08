import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';

import { DesignRoutingModule } from './design-routing.module';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HostListingComponent } from './host-listing/host-listing.component';

@NgModule({
  declarations: [HomeComponent, PropertyListComponent, HostListingComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
