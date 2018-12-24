import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HostListingComponent } from './host-listing/host-listing.component';
import { PropertyDetailsComponent} from './property-details/property-details.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { TeamComponent } from './team/team.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { MediaRoomComponent } from './media-room/media-room.component';
import { PropertyDashboardComponent } from './property-dashboard/property-dashboard.component';
import { HostPropertyDetailsComponent } from './host-property-details/host-property-details.component';


const routerConfig: Routes = [
  { path: '', component: HomeComponent},
  { path: 'property-list', component: PropertyListComponent},
  { path: 'host-listing', component: HostListingComponent},
  { path: 'property-details', component: PropertyDetailsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'career', component: CareerComponent},
  { path: 'team', component: TeamComponent},
  { path: 'media', component: MediaRoomComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'cancellation-policy', component: CancellationPolicyComponent},
  { path: 'property-dashboard', component: PropertyDashboardComponent},
  { path: 'host-property-details', component: HostPropertyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
