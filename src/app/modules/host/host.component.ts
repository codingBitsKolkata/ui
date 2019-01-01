import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }
  scroll(el) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
