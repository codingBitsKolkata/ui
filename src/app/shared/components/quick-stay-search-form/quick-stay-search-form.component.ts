import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-quick-stay-search-form',
  templateUrl: './quick-stay-search-form.component.html',
  styleUrls: ['./quick-stay-search-form.component.scss']
})
export class QuickStaySearchFormComponent implements OnInit {

  @Input() searchObj: object;
  @Input() propertyDetails: object;
  @Output() searchFormSubmitted  = new EventEmitter<any>();
  checkInDate: any;
  checkOutDate: any;
  totalNoOfGuest: number;

  constructor(
    private modalService: NgbModal,
    private sharedSrv: SharedService,
  ) {

  }
  ngOnInit() {
   console.log('QuickStaySearchFormComponent', this.searchObj);
   if (Object.keys(this.searchObj).length) {
      this.checkInDate = this.searchObj['checkInDate'];
      this.checkOutDate = this.searchObj['checkOutDate'];
      const rooms = this.searchObj['rooms'];
      let totalNoOfGuest = 0;
      for (let i = 0; i < rooms.length; i++) {
        totalNoOfGuest +=  rooms[i].noOfGuest + rooms[i].noOfChild;
      }
      this.totalNoOfGuest = totalNoOfGuest;
   }
  }
  openModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup host-details' });
}
bookYourStay() {
  this.searchFormSubmitted.emit(this.searchObj);
}

}
