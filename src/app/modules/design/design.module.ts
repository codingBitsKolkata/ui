
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxGalleryModule } from 'ngx-gallery';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FormWizardModule } from 'angular2-wizard';
import { TagInputModule } from 'ngx-chips';
import { NguCarouselModule } from '@ngu/carousel';

import { DesignRoutingModule } from './design-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HostListingComponent } from './host-listing/host-listing.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { TeamComponent } from './team/team.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { MediaRoomComponent } from './media-room/media-room.component';

@NgModule({
  declarations: [HomeComponent, PropertyListComponent, HostListingComponent, PropertyDetailsComponent, AboutComponent, CareerComponent, TeamComponent, PrivacyPolicyComponent, CancellationPolicyComponent, MediaRoomComponent],
  imports: [
    
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    DesignRoutingModule,
    NgxGalleryModule,
    DragScrollModule,
    DesignRoutingModule,
    SharedModule,
    FormWizardModule,
    TagInputModule,
    NguCarouselModule
  ]
})
export class DesignModule { }
