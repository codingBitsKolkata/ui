import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HostListingComponent } from './host-listing/host-listing.component';
import { PropertyDetailsComponent} from './property-details/property-details.component';


const routerConfig: Routes = [
  { path: '', component: HomeComponent},
  { path: 'property-list', component: PropertyListComponent},
  { path: 'host-listing', component: HostListingComponent},
  { path: 'property-details', component: PropertyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
