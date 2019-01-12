import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { SharedService} from '../../../services/shared.service';
import { FlightService } from '../../../services/apis/flight.service';
// tslint:disable-next-line:max-line-length
import { NgbDate, NgbCalendar, NgbDateStruct, NgbDatepickerConfig, NgbInputDatepicker, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent implements OnInit {

  flightSearchForm: FormGroup;
  searching = false;
  searchFailed = false;
  constructor(
    private fb: FormBuilder,
    private sharedSrv: SharedService,
    private flightSrv: FlightService,
    calendar: NgbCalendar,
    config: NgbDatepickerConfig,
    private parserFormatter: NgbDateParserFormatter,
    private router: Router
  ) {
      this.buildSearchForm();
  }

    // For auto complete
    formatMatches = (value: any) => value ? value.cityName + ' (' + value.airportCode + ')' : '';
    search = (text$: Observable<string>) =>
      text$
        .debounceTime(300)
        .distinctUntilChanged()
        .do(() => this.searching = true)
    .switchMap(term => term.length < 2 ? [] : this.flightSrv.getAirport({keyword : term})
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
    .do(() => this.searching = false)

  ngOnInit() {

  }
    /**
   * This method is responsible for building, setup input filed and validator of flight search form
   */
  buildSearchForm() {
    this.flightSearchForm = this.fb.group({
      tripType : new FormControl('R', [Validators.required]),
      arrival_date : new FormControl('', [Validators.required]),
      noOfAdults : new FormControl('', [Validators.required]),
      noOfChild : new FormControl('', [Validators.required]),
      classType : new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
      multiCities: this.fb.group({
        destination : new FormControl('', [Validators.required]),
        flightDepartDate : new FormControl('', [Validators.required]),
      }),
    });
    console.log(this.flightSearchForm);
  }
  onSubmitSearch() {
    console.log(this.flightSearchForm);
    if (this.flightSearchForm.valid) {
       const searchParam  = Object.assign({}, this.flightSearchForm.value);
       console.log(searchParam);
    } else {
      this.sharedSrv.validateAllFormFields(this.flightSearchForm);
    }
  }

  getFlightList(keyword) {
    this.flightSrv.getAirport({keyword : keyword}).subscribe((res) => {
      console.log('getFlightList data', res);
      if (res.responseCode === '200') {

      }
    }, error => {
      console.log('error', error);
    });
  }

}
