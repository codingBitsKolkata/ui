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
  items = ['Pizza', 'Pasta', 'Parmesan'];
}
