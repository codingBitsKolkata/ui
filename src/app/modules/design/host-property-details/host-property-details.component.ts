import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-property-details',
  templateUrl: './host-property-details.component.html',
  styleUrls: ['./host-property-details.component.scss']
})
export class HostPropertyDetailsComponent implements OnInit {
  checkInTime = {hour: 10, minute: 30};
  checkOutTime = {hour: 12, minute: 30};
  meridian = true;

  constructor() { }

  ngOnInit() {
  }

}
