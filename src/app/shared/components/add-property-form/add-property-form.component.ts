import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PropertyService } from '../../../services/apis/property.service';

@Component({
  selector: 'app-add-property-form',
  templateUrl: './add-property-form.component.html',
  styleUrls: ['./add-property-form.component.scss']
})
export class AddPropertyFormComponent implements OnInit {

  addPropertyForm: FormGroup;
  propertyTypes: Array<any>;
  spaceRules: Array<any>;
  latitude: any;
  longitude: any;
  guestAccess: Array<any>;
  nearbyPlaces: Array<any>;
  specialExperienceList: Array<any>;
  dropdownSettings: any;

  constructor(
    private fb: FormBuilder,
    private srvProperty: PropertyService,
  ) {
    this.latitude = 22.5726;
    this.longitude = 88.3639;
    this.guestAccess = [];
    this.nearbyPlaces = [];
    this.spaceRules = [];
    this.specialExperienceList = [];
    this.buildAddPropertyForm();
    this.getPropertyTypes();
    this.getSpaceRuleList();
    this.getSpecialExperienceList();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'experienceId',
      textField: 'experienceName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
  };
  }

  ngOnInit() {

  }

  buildAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      step1: this.fb.group({
        propertyType: new FormControl('', [Validators.required])
      }),
      step2: this.fb.group({
        name: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
      }),
      step3: this.fb.group({
        guestAccess: new FormControl('', [Validators.required]),
        places: new FormControl('', [Validators.required])
      }),
      step4: this.fb.group({
        ruleName: new FormControl('', [Validators.required]),
        specialExperience: new FormControl('', [Validators.required])
      }),
    });
  }

  onSubmitPropertyForm() {
    console.log(this.addPropertyForm);
    console.log(this.addPropertyForm.value);
  }
  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
  }
  getPropertyTypes() {
    this.srvProperty.getPropertyTypes({}).subscribe((res) => {
     console.log('getPropertyTypes data', res);
     if (res.responseCode === '200') {
       this.propertyTypes = res.responseBody;
     }
   }, error => {
     console.log('error', error);
   });
 }

 getSpaceRuleList() {
  this.srvProperty.getSpaceRuleList({languageId: 1}).subscribe((res) => {
   if (res.responseCode === '200') {
     this.spaceRules = res.responseBody;
   }
 }, error => {
   console.log('error', error);
 });
}

getSpecialExperienceList() {
  this.srvProperty.getSpecialExperienceList({languageId: 1}).subscribe((res) => {
   if (res.responseCode === '200') {
     this.specialExperienceList = res.responseBody;
   }
 }, error => {
   console.log('error', error);
 });
}

}
