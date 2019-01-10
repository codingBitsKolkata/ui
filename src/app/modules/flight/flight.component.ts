import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  tripType;
  constructor(private modalService: NgbModal, private router: Router) {
  }
  
  modalReference;
  openModal(content) {
    // , size: 'md'
    this.modalReference = this.modalService.open(content, { windowClass: 'modal-popup personal-info' });
  }

  openPaymentModal(content) {
    // , size: 'md'
    this.modalReference.close();
    this.modalService.open(content, { windowClass: 'modal-popup payment', size: 'lg' });
  }

  ngOnInit() {
    this.tripType = this.router.url;
    let x = this.tripType.split("/");
    this.tripType = x[x.length-1];
    console.log(this.tripType);
  }

}
