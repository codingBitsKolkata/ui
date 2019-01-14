import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.scss']
})
export class OnewayComponent implements OnInit {
  public isCollapsed = true;

  @Input() flightData: any;
  @Input() flightSearchObj: any;
  airlineNames: Array<any>;
  flightList: Array<any>;
  fareDetails: Array<any>;
  constructor() {
    this.flightList = [];
    this.airlineNames = [];
    this.fareDetails = [];
  }
  ngOnInit() {
    const originAirportCode = this.flightSearchObj.multiCities[0].origin.airportCode;
    const destinationAirportCode = this.flightSearchObj.multiCities[0].destination.airportCode;
    const flightDepartDate =  this.flightSearchObj.multiCities[0].flightDepartDate;
    const flightDate = + flightDepartDate.year + this.minTwoDigits(flightDepartDate.month) + this.minTwoDigits(flightDepartDate.day);
    const dataSearchKey = originAirportCode + destinationAirportCode + flightDate;
    this.flightList = this.flightData.resultData[0].fltSchedule[dataSearchKey];
    this.airlineNames = this.flightData.resultData[0].fltSchedule['airlineNames'];
    this.fareDetails = this.flightData.resultData[0].fareDetails[dataSearchKey];
  }
   minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }
  getAirlineName( code) {
    return this.airlineNames[code];
  }
  getFare (flightId) {
    const fareO = this.fareDetails[flightId]['O'];
    return fareO.revisedFareDetails.tf;
  }

}
