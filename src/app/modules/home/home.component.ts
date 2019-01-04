import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDatepickerConfig, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialService } from '../../services/apis/testimonial.service';
import { PropertyService } from '../../services/apis/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('dpHotel') dpHotel: NgbInputDatepicker;
  @ViewChild('dpFlight') dpFlight: NgbInputDatepicker;

  hNoOfAdult = 0;
  hNoOfChild = 0;
  noOfRooms = 0;
  hoveredDate: NgbDate;
  h_fromDate: NgbDate;
  h_toDate: NgbDate;
  f_fromDate: NgbDate;
  f_toDate: NgbDate;
  onFirstSelection = true;
  testimonialList: Array<any>;
  propertyTypes: Array<any>;
  propertyList: Array<any>;

  constructor(
    calendar: NgbCalendar,
    config: NgbDatepickerConfig,
    private srvTestimonial: TestimonialService,
    private srvProperty: PropertyService
    ) {
    this.h_fromDate = calendar.getToday();
    this.h_toDate = calendar.getNext(calendar.getToday(), 'd', 3);

    this.f_fromDate = calendar.getToday();
    this.f_toDate = calendar.getNext(calendar.getToday(), 'd', 3);

    const currentDate = new Date();
    config.minDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
    config.maxDate = { year: 2020, month: 12, day: 31 };

    this.propertyList = [];
    this.getTestimonailList();
    this.getPropertyTypes();
  }
  currentJustify = 'justified';
  // constructor() { }

  ngOnInit() {
  }

  onDateSelectionHotel(date: NgbDate) {
    if (!this.h_fromDate && !this.h_toDate) {
      this.h_fromDate = date;
    } else if (this.h_fromDate && !this.h_toDate) {
      this.h_toDate = date;
      this.dpHotel.close();
    } else {
      this.h_toDate = null;
      this.h_fromDate = date;
    }
  }
  onDateSelectionFlight(date: NgbDate) {
    if (!this.f_fromDate && !this.f_toDate) {
      this.f_fromDate = date;
    } else if (this.f_fromDate && !this.f_toDate) {
      this.f_toDate = date;
      this.dpFlight.close();
    } else {
      this.f_toDate = null;
      this.f_fromDate = date;
    }
  }

  isHoveredHotel(date: NgbDate) {
    return this.h_fromDate && !this.h_toDate && this.hoveredDate && date.after(this.h_fromDate) && date.before(this.hoveredDate);
  }

  isInsideHotel(date: NgbDate) {
    return date.after(this.h_fromDate) && date.before(this.h_toDate);
  }

  isRangeHotel(date: NgbDate) {
    return date.equals(this.h_fromDate) || date.equals(this.h_toDate) || this.isInsideHotel(date) || this.isHoveredHotel(date);
  }

  isHoveredFlight(date: NgbDate) {
    return this.f_fromDate && !this.f_toDate && this.hoveredDate && date.after(this.f_fromDate) && date.before(this.hoveredDate);
  }

  isInsideFlight(date: NgbDate) {
    return date.after(this.f_fromDate) && date.before(this.f_toDate);
  }

  isRangeFlight(date: NgbDate) {
    return date.equals(this.f_fromDate) || date.equals(this.f_toDate) || this.isInsideFlight(date) || this.isHoveredFlight(date);
  }

  // formatInputText(currentSelection: NgbDate, parserFormatter: NgbDateParserFormatter) {
  //   return `${this.f_fromDate ? parserFormatter.format(this.h_fromDate) : ''} - ${this.h_toDate ? parserFormatter.format(this.h_toDate) : ''}`;
  // }
  // isRangeFlight

  getTestimonailList() {
     this.srvTestimonial.getTestimonial().subscribe((res) => {
      console.log('getTestimonial data', res);
      if (res.responseCode === '200') {
        this.testimonialList = res.responseBody;
        if (this.testimonialList.length > 2) {
          this.testimonialList.length = 2;
        }
      }
    }, error => {
      console.log('error', error);
    });
  }

  getPropertyTypes() {
    this.srvProperty.getPropertyTypes({}).subscribe((res) => {
     console.log('getPropertyTypes data', res);
     if (res.responseCode === '200') {
       this.propertyTypes = res.responseBody;
       for (let i = 0; i < this.propertyTypes.length; i++) {
        this.propertyList[this.propertyTypes[i].propertyTypeId] = [];
       }
       if (this.propertyTypes.length > 0) {
        this.getPropertyList(this.propertyTypes[0]);
       }
     }
   }, error => {
     console.log('error', error);
   });
 }

 getPropertyList(propertyType: any) {
  if (this.propertyList[propertyType.propertyTypeId].length === 0) {
    this.srvProperty.getPropertyByType({propertyTypeId: propertyType.propertyTypeId}).subscribe((res) => {
      console.log('getPropertyList data', res);
      if (res.responseCode === '200') {
         this.propertyList[propertyType.propertyTypeId] = res.responseBody;
         console.log(this.propertyList);
      }
    }, error => {
      console.log('error', error);
    });
  }
}


}
