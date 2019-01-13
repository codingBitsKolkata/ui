import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService} from '../../services/shared.service';
import { FlightService } from '../../services/apis/flight.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flightSearchObj: object;
  tripType;
  loading: boolean;
  flightList: object;
  constructor(
    private modalService: NgbModal,
    private sharedSrv: SharedService,
    private srvFlight: FlightService,
    private route: ActivatedRoute,
    private router: Router) {

      this.loading = false;

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
    const x = this.tripType.split('/');
    this.tripType = x[x.length - 1];
    console.log(this.tripType);

    const flightSearchData = this.sharedSrv.flightSearchData;
    const isSearchObjEmpty = !Object.keys(flightSearchData).length;
    if (!isSearchObjEmpty) {
      this.flightSearchObj = flightSearchData;
      this.getFlightList(flightSearchData);
    } else {
      const searchObj = JSON.parse(localStorage.getItem('flightSearchObj'));
      this.flightSearchObj = searchObj;
      this.getFlightList(searchObj);
    }
    this.route.queryParams.subscribe(params => { console.log(params); });
    console.log('flightSearchObj', this.flightSearchObj);

  }

  getFlightList(params: any) {
    this.loading = true;
    this.srvFlight.getFlightList(params).subscribe((res) => {
      this.loading = false;
      console.log('getFlightList data', res);
      if (res.responseCode === '200') {
         this.flightList = JSON.parse(res.responseBody);
         console.log(this.flightList);
      }
    }, error => {
      this.loading = false;
      console.log('error', error);
    });
  }
  searchFormSubmitted(searchData) {
    console.log(searchData);
   }

}
