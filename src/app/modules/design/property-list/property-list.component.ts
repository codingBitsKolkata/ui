import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  public checkboxGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      excellent: true,
      very_good: false,
      good: false,
      all_of_kolkata: true,
      saltlake: false,
      parkstreet: false,
      all_facilities: true,
      airconditioner: false,
      wifi: false,
      television: false,
      under_299: true,
      under_299_999: false,
      under_999_1499: true,
      under_1499_1999: false,

      popularity: false,
      price_lowest_first: true,
      couples_frindly: false,
      pet_friendly: false
    });
  }


}
