import { Injectable } from '@angular/core';
import {FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public sharedHomeSearchData = {};
  public flightSearchData = {};
  constructor() { }

  validateAllFormFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        console.log(control);
        for (let i = 0; i < control.length; i++) {
          this.validateAllFormFields(<any> control.controls[i]);
        }
      }
    });
  }
  getRatingText(rating) {
    const ratingPoint = parseFloat(parseFloat(rating).toFixed(2));
    // console.log(typeof ratingPoint);
    if (ratingPoint <= 4) {
      return 'Good';
    } else if (ratingPoint > 4 &&  ratingPoint <= 6) {
      return 'Very Good';
    } else if (ratingPoint >= 6) {
      return 'Excellent';
    } else {
      return '';
    }

  }
}
