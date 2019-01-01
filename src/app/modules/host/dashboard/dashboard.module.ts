import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HostPropertyListComponent } from './host-property-list/host-property-list.component';
import { HostPropertyDetailsComponent } from './host-property-details/host-property-details.component';

@NgModule({
  declarations: [DashboardComponent, HostPropertyListComponent, HostPropertyDetailsComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
