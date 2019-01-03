import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { WhiteSpaceValidator } from '../../../directives/validators/white-space-validation';
import { SharedService} from '../../../services/shared.service';

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
  constructor(
    private fb: FormBuilder,
    private sharedSrv: SharedService,
  ) {
     // this.noOfGuest[0] = 1;
      //this.noOfChild[0] = 0;
      this.buildSearchForm();
  }

  ngOnInit() {
  }

   /**
   * This method is responsible for building, setup input filed and validator of stay search form
   */
  buildSearchForm() {
    this.staySearchForm = this.fb.group({
      propertyTypeId: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      checkInDate: new FormControl('', [Validators.required]),
      checkOutDate: new FormControl('', [Validators.required]),
      rooms: this.fb.array([this.buildRoomForm()])
    });
    console.log(this.staySearchForm);
  }
  buildRoomForm() {
    return this.fb.group({
      noOfGuest: new FormControl('', [Validators.required]),
      noOfChild: new FormControl('', [Validators.required])
      });
  }

  onSubmitSearch() {
    console.log(this.staySearchForm);
  }
  onNumberChanged(event) {
    console.log(event);
  }
  addRoom() {
    (this.staySearchForm.controls['rooms'] as FormArray).push(this.buildRoomForm());
    const arrayControl = <FormArray>this.staySearchForm.controls['rooms'];
    // this.noOfGuest[arrayControl.length] = 1;
    // this.noOfChild[arrayControl.length] = 0;
  }
  removeRoom(index) {
    const arrayControl = <FormArray>this.staySearchForm.controls['rooms'];
        arrayControl.removeAt(index);
  }
}
