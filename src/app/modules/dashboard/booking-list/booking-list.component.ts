import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../../../services/apis/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  userBookingList: Array<any>;
  bookingSwitch;

  constructor(private modalService: NgbModal, private srvBooking: BookingService) { 
    this.userBookingList = [];
    this.getBookingList();
  }

  ngOnInit() {
    this.bookingSwitch = 'stays';
  }
  openModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup cancellation-modal', size:'sm', centered: true });
  }

  getBookingList() {
    this.srvBooking.getBookingList({}).subscribe((res) => {
      console.log('getOfferList data', res);
      if (res.responseCode === '200') {
        if(res.responseBody !== null){
          this.userBookingList = res.responseBody;
        }else{
         this.userBookingList = [];
        }
      }
    }, error => {
      console.log('error', error);
    });
  }

}
