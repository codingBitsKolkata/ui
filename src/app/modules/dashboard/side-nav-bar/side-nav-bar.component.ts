import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit, AfterViewInit {

  sectionScroll: string;
  constructor(private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private activeRoute: ActivatedRoute) { 

  }
  openModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup' });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScrollToDiv();
      this.sectionScroll = null;
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  scrollToDiv(page, dest) {
    this.sectionScroll = dest;
    this.router.navigate([page], {fragment: dest});
   // this.doScrollToDiv();
  }

  doScrollToDiv() {
    if (!this.sectionScroll && this.sectionScroll == null) {
      return;
    }
    try {
      console.log(this.sectionScroll);
      const element = document.getElementById(this.sectionScroll);
      element.scrollIntoView({behavior: 'smooth'});
    }
    finally {
      this.sectionScroll = null;
    }
  }

}
