import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

  sectionScroll: string;
  constructor(private modalService: NgbModal,
    private router: Router,
    private activeRoute: ActivatedRoute) { 

  }
  openModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup' });
  }

  ngOnInit() {
  }
  scrollToDiv(page, dest) {
    this.sectionScroll = dest;
    this.router.navigate([page], {fragment: dest});
   // this.doScrollToDiv();
  }

}
