import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { WhiteSpaceValidator } from '../../../directives/validators/white-space-validation';
import { SharedService} from '../../../services/shared.service';
import { NgbDate, NgbCalendar, NgbDatepickerConfig, NgbInputDatepicker, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
// import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {Router} from '@angular/router';
declare const google: any;

@Component({
  selector: 'app-stay-search-form',
  templateUrl: './stay-search-form.component.html',
  styleUrls: ['./stay-search-form.component.scss']
})
export class StaySearchFormComponent implements OnInit {

  @Input() propertyTypes: Array<any>;
  staySearchForm: FormGroup;
  noOfGuest: Array<number>;
  noOfChild: Array<number>;
  numberOfRooms: number;
  numberOfGuest: number;
  checkInDate: NgbDate;
  checkOutDate: NgbDate;
  checkOutMinDate: any;
  checkInMinDate: any;
  latitude: any;
  longitude: any;
  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private fb: FormBuilder,
    private sharedSrv: SharedService,
    calendar: NgbCalendar,
    config: NgbDatepickerConfig,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private parserFormatter: NgbDateParserFormatter,
    private router: Router
  ) {
    this.checkInDate = calendar.getToday();
    this.checkOutDate = calendar.getNext(calendar.getToday(), 'd', 3);
    const currentDate = new Date();
    // config.minDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
    this.checkOutMinDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
    this.checkInMinDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
    this.noOfGuest = [1];
    this.noOfChild = [0];
    this.numberOfRooms = 1;
    this.numberOfGuest = 1;
    this.buildSearchForm();
  }

  ngOnInit() {
   // this.staySearchForm.get('rooms').setValue({noOfGuest: 1, noOfChild: 0 });
    this.staySearchForm.patchValue({
      rooms : [{noOfGuest: 1, noOfChild: 0 }]
    });

      // load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ['geocode']
        });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            // get the place result
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            // verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            console.log(place);
            // console.log(place.geometry.location.lat());
            // console.log(place.geometry.location.lng());
            // console.log(place.formatted_address);
            this.latitude = place.geometry.location.lat().toFixed(6);
            this.longitude = place.geometry.location.lng().toFixed(6);
            this.staySearchForm.patchValue({location: place.formatted_address});
          });
        });
      });
    }

   /**
   * This method is responsible for building, setup input filed and validator of stay search form
   */
  buildSearchForm() {
    this.staySearchForm = this.fb.group({
      propertyTypeId: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      checkInDate: new FormControl(this.checkInDate, [Validators.required]),
      checkOutDate: new FormControl(this.checkOutDate, [Validators.required]),
      rooms: this.fb.array([this.buildRoomForm()])
    });
    console.log(this.staySearchForm);
  }
  buildRoomForm() {
    return this.fb.group({
      noOfGuest: new FormControl(1, [Validators.required]),
      noOfChild: new FormControl(0, [Validators.required])
      });
  }

  onSubmitSearch() {
    console.log(this.staySearchForm);
    if (this.staySearchForm.valid) {
       const searchParam  = this.staySearchForm.value;
       const checkInDate = this.parserFormatter.format(searchParam.checkInDate);
       const checkOutDate = this.parserFormatter.format(searchParam.checkOutDate);
       searchParam.checkInDate = checkInDate;
       searchParam.checkOutDate = checkOutDate;
       searchParam['latitude'] = this.latitude;
       searchParam['longitude'] = this.longitude;
       console.log(searchParam);
       localStorage.setItem('searchObj', JSON.stringify(searchParam));
       this.sharedSrv.sharedHomeSearchData = searchParam;
       this.router.navigate(['/properties']);
    } else {
      this.sharedSrv.validateAllFormFields(this.staySearchForm);
    }
  }
  onNumberChanged(val: number, index: number , filedName: string) {
    console.log(event);
    const formArray  = this.staySearchForm.get('rooms') as FormArray;
    formArray.at(index)['controls'][filedName].patchValue(val);
    this.setNumberOfGuest();
  }

  get roomsArray(): FormArray {
    return this.staySearchForm.get('rooms') as FormArray;
  }
  addRoom() {
    // (this.staySearchForm.controls['rooms'] as FormArray).push(this.buildRoomForm());
    this.roomsArray.push(this.buildRoomForm());
    this.noOfGuest.push(1);
    this.noOfChild.push(0);
    this.numberOfRooms++;
    this.setNumberOfGuest();
  }
  removeRoom(index: number) {
    // const arrayControl = <FormArray>this.staySearchForm.controls['rooms'];
      //  arrayControl.removeAt(index);
      this.roomsArray.removeAt(index);
        this.noOfGuest.splice(index, 1);
        this.noOfChild.splice(index, 1);
        this.numberOfRooms--;
        this.setNumberOfGuest();
  }
  setNumberOfGuest() {
    this.numberOfGuest = this.noOfGuest.reduce((a, b) => a + b, 0) + this.noOfChild.reduce((a, b) => a + b, 0);
  }
  onCheckInDateSelect(event) {
    console.log(event);
    this.checkInDate = event;
    this.checkOutDate = null;
    this.staySearchForm.patchValue({checkOutDate: ''});
    this.checkOutMinDate = event;
  }
}
