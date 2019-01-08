import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss']
})
export class FlightFilterComponent implements OnInit {
  tripType;
  expanded;

  constructor(private router: Router, private formBuilder: FormBuilder,) { }
  public checkboxGroupForm: FormGroup;

  ngOnInit() {
    this.tripType = this.router.url;
    let x = this.tripType.split("/");
    this.tripType = x[x.length-1];

    this.expanded = true;

    this.checkboxGroupForm = this.formBuilder.group({
      airlines: true,
      spicejet: false,
      air_india: false
    });
  }

  toggleFilter(){
      this.expanded = !this.expanded;
  }

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '$' + value;
        case LabelType.High:
          return '$' + value;
        default:
          return '$' + value;
      }
    }
  };

}
