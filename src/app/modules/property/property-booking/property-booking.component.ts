import { Component, OnInit } from '@angular/core';
import { SharedService} from '../../../services/shared.service';
import { PropertyService } from '../../../services/apis/property.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-property-booking',
  templateUrl: './property-booking.component.html',
  styleUrls: ['./property-booking.component.scss']
})
export class PropertyBookingComponent implements OnInit {
  propertyDetails: object;
  searchObj: object;
  totalNoOfGuest: number;
  totalNoOfChild: number;
  objectKeys = Object.keys;
  bookingCompleted: boolean;

  constructor(
    private sharedSrv: SharedService,
    private srvProperty: PropertyService,
    private router: Router) { }

    ngOnInit(): void {
      const sharedHomeSearchData = this.sharedSrv.sharedHomeSearchData;
      const isSearchObjEmpty = !Object.keys(sharedHomeSearchData).length;
      if (!isSearchObjEmpty) {
        this.getPropertyDetails(sharedHomeSearchData);
        this.searchObj = sharedHomeSearchData;
      } else {
        const searchObj = JSON.parse(localStorage.getItem('searchObj'));
        this.getPropertyDetails(searchObj);
        this.searchObj = searchObj;
        console.log(this.searchObj);
      }
      if (Object.keys(this.searchObj).length) {
        const rooms = this.searchObj['rooms'];
        let totalNoOfGuest = 0;
        let totalNoOfChild = 0;
        for (let i = 0; i < rooms.length; i++) {
          totalNoOfGuest +=  rooms[i].noOfGuest;
          totalNoOfChild +=  rooms[i].noOfChild;
        }
        this.totalNoOfGuest = totalNoOfGuest;
        this.totalNoOfChild = totalNoOfChild;
     }
    }

    getPropertyDetails(params: any) {
      this.srvProperty.getPropertyDetails(params).subscribe((res) => {
          if (res.responseCode === '200') {
              this.propertyDetails = res.responseBody;
              console.log(this.propertyDetails);
          }
      }, error => {
          console.log('error', error);
      });
    }

    bookingFormSubmit(){
      this.bookingCompleted = true;
    }

}
