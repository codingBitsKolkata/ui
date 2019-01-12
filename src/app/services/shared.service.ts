import { Injectable } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public sharedHomeSearchData = {};
  constructor() { }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
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
