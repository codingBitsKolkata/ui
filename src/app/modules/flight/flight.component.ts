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
  loading: boolean;
  flightList: any;
  tripType: string;
  totalFlightFound: number;
  airlineNames: Array<any>;
  selectedFlightData: any;
  routeName: string;
  constructor(
    private modalService: NgbModal,
    private sharedSrv: SharedService,
    private srvFlight: FlightService,
    private route: ActivatedRoute,
    private router: Router) {

      this.loading = false;
      this.airlineNames = [];
      this.routeName = this.router.url;
      console.log(this.routeName);

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
    const flightSearchData = this.sharedSrv.flightSearchData;
    const isSearchObjEmpty = !Object.keys(flightSearchData).length;
    if (!isSearchObjEmpty) {
      this.flightSearchObj = flightSearchData;
      this.tripType = flightSearchData['tripType'];
      this.getFlightList(flightSearchData);
    } else {
      const searchObj = JSON.parse(localStorage.getItem('flightSearchObj'));
      if (searchObj) {
        this.flightSearchObj = searchObj;
      this.tripType = searchObj.tripType;
      this.getFlightList(searchObj);
      }
    }
    this.route.queryParams.subscribe(params => { console.log(params); });
   // console.log('flightSearchObj', this.flightSearchObj);

  }

  getFlightList(params: any) {
    const searchReq =  this.preparedSearchRequest(params);
    console.log(searchReq);
    this.loading = true;
    this.flightList = {};
    this.totalFlightFound = 0;
    this.airlineNames = [];
    this.srvFlight.getFlightList(searchReq).subscribe((res) => {
      this.loading = false;
     // console.log('getFlightList data', res);
      if (res.responseCode === '200') {
         if (res.responseBody) {
             this.flightList = JSON.parse(res.responseBody);
            console.log(this.flightList);
            this.totalFlightFound = this.flightList.resultData[0].isFlights;
            this.airlineNames = this.flightList.resultData[0].fltSchedule['airlineNames'];
         }
      }
    }, error => {
      this.loading = false;
      console.log('error', error);
    });
  }
  preparedSearchRequest(params) {
    const flightDepartDate = params.multiCities[0].flightDepartDate;
    const arrivalDate = params.multiCities[0].arrival_date;
    const searchObj = {
      classType: params.classType,
      noOfAdults: params.noOfAdults,
      noOfChild: params.noOfChild,
      noOfInfants: params.noOfInfants,
      tripType: params.tripType,
      multiCities: [{
        destination: params.multiCities[0].destination.airportCode,
        origin: params.multiCities[0].origin.airportCode,
        flightDepartDate: flightDepartDate.day + '/' + flightDepartDate.month +  '/' + flightDepartDate.year
      }]
    };
    if (params.tripType === 'R') {
      searchObj['arrival_date'] = arrivalDate.day + '/' + arrivalDate.month +  '/' + arrivalDate.year;
    }

    return searchObj;
  }
  searchFormSubmitted(searchData) {
    console.log(searchData);
    this.flightSearchObj = searchData;
    this.tripType = searchData.tripType;
    this.getFlightList(searchData);
   }
   getAirlineName( code) {
    return this.airlineNames[code];
  }
   onFlightSelected(flightData) {
     console.log(flightData);
     this.selectedFlightData = flightData;

   }

}
