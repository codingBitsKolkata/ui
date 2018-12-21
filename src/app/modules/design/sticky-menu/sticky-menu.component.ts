import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss'],
  providers: [NgbDropdownConfig],
})
export class StickyMenuComponent implements OnInit {

  constructor(config: NgbDropdownConfig) { }

  ngOnInit() {
  }
  scrollToDiv(el) {
    el.scrollIntoView({behavior: 'smooth'});
    // window.scrollTo(el.yPosition)
  }

}
