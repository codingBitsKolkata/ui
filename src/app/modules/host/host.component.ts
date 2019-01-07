import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  
  constructor(private modalService: NgbModal) {
    
   }

  ngOnInit() {

  }
  openModal(content) {
    // , size: 'md'
      this.modalService.open(content, { windowClass: 'modal-popup', centered: true });
  }
}
