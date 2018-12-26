import { Component, AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { TestModalComponent } from '../../shared/components/test-modal/test-modal.component';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {
  @ViewChild('comingSoonModalBtn') comingSoonModalBtn:ElementRef;

  currentJustify = 'justified';
  loginFormSelectedTab = 'loginTab';
  title = 'testing';

  navbarOpen = false;
  oncloseModal(event: string) {
    console.log(event);

  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  beforeChange($event: NgbTabChangeEvent) {
    console.log('Changing tab', $event);
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
    this.loginFormSelectedTab = selectedTab;
  }
  openComingSoon(content) {
    this.modalService.open(content, { windowClass: 'coming-soon', size: 'sm', centered: true });
  }

  openTestModal() {
    const modalRef = this.modalService.open(AuthComponent, {centered: true});
    modalRef.componentInstance.loginFormSelectedTab = 'loginTab';
  }
}
