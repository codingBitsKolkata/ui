import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  constructor(
    private fb: FormBuilder,
    private sharedSrv: SharedService,
  ) {
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
      checkInDate: new FormControl('', [Validators.required]),
      checkOutDate: new FormControl('', [Validators.required])
    });
  }
}
