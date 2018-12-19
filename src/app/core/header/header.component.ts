import { Component, AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {
  @ViewChild('comingSoonModalBtn') comingSoonModalBtn:ElementRef;

  currentJustify = 'justified';

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    // config.keyboard = false;
  }
  ngOnInit() {
    
  }
  ngAfterViewInit(){
    // this.comingSoonModalBtn.nativeElement.click();
  }
  open(content, selectedTab) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'login-section' });
  }
  openComingSoon(content) {
    this.modalService.open(content, { windowClass: 'coming-soon', size: 'sm', centered: true });
  }
}
