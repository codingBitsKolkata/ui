import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss'],
  providers: [NgbDropdownConfig],
})
export class StickyMenuComponent implements OnInit, AfterViewInit {

  constructor(config: NgbDropdownConfig,private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  scrollToDiv(el) {
    el.scrollIntoView({behavior: 'smooth'});
    // window.scrollTo(el.yPosition)
  }

}
