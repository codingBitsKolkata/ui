import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentJustify = 'justified';

  constructor(private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    // config.keyboard = false;
  }
  ngOnInit() {
  }
  open(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'login-section' });
  }
}
