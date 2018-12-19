import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-listing',
  templateUrl: './host-listing.component.html',
  styleUrls: ['./host-listing.component.scss']
})
export class HostListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scroll(el) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  // Host Form parameters
  guestAccess = [];
  nearbyPlaces = [];
  spaceRules = ['Couple Friendly', 'Pet Friendly', 'Smoking', 'Alchohol'];
  specialExperience = ['Spa', 'Musical Instrument', 'Yoga Center'];
  specialities = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  amenities = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  checkInTime = {hour: 10, minute: 30};
  checkOutTime = {hour: 12, minute: 30};
  meridian = true;
}
