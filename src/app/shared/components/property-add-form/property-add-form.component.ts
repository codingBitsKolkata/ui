import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-property-add-form',
  templateUrl: './property-add-form.component.html',
  styleUrls: ['./property-add-form.component.scss']
})
export class PropertyAddFormComponent implements OnInit {

  specialExperienceList = [];
  specialExperience = [];

  specialitiesList = [];
  specialities = [];

  amenitiesList = [];
  amenities = [];

  dropdownSettings = {};
  addPropertyForm: FormGroup;
  totalRoomsVal: any;

  constructor(
    private fb: FormBuilder
  ) { 
    this.buildAddPropertyForm();
    this.totalRoomsVal = 1;
  }

  ngOnInit() {
    this.specialExperienceList = [
        { item_id: 1, item_text: 'Exp 1' },
        { item_id: 2, item_text: 'Exp 2' },
        { item_id: 3, item_text: 'Exp 3' },
        { item_id: 4, item_text: 'Exp 4' },
        { item_id: 5, item_text: 'Exp 5' },
        { item_id: 6, item_text: 'Exp 6' },
        { item_id: 7, item_text: 'Exp 7' },
        { item_id: 8, item_text: 'Exp 8' }
    ];
    this.specialExperience = [];
    
    this.specialitiesList = [
      { item_id: 1, item_text: 'Specialities 1' },
      { item_id: 2, item_text: 'Specialities 2' },
      { item_id: 3, item_text: 'Specialities 3' },
      { item_id: 4, item_text: 'Specialities 4' },
      { item_id: 5, item_text: 'Specialities 5' },
      { item_id: 6, item_text: 'Specialities 6' },
      { item_id: 7, item_text: 'Specialities 7' },
      { item_id: 8, item_text: 'Specialities 8' }
    ];
    this.specialExperience = [];
    
    this.amenitiesList = [
      { item_id: 1, item_text: 'Amenities 1' },
      { item_id: 2, item_text: 'Amenities 2' },
      { item_id: 3, item_text: 'Amenities 3' },
      { item_id: 4, item_text: 'Amenities 4' },
      { item_id: 5, item_text: 'Amenities 5' },
      { item_id: 6, item_text: 'Amenities 6' },
      { item_id: 7, item_text: 'Amenities 7' },
      { item_id: 8, item_text: 'Amenities 8' }
    ];
    this.specialities = [];

    this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
    };
  }

  buildAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      step1: this.fb.group({
        propertyType: new FormControl('homestay', [Validators.required])
      }),
      step2: this.fb.group({
        propertyName: new FormControl('', [Validators.required]),
        propertyAddress: new FormControl('', [Validators.required]),
        propertyDesc: new FormControl('', [Validators.required])
      }),
      step3: this.fb.group({
        guestAccess: new FormControl('', [Validators.required]),
        nearbyPlaces: new FormControl('', [Validators.required])
      }),
      step4: this.fb.group({
        propertySpaceType: new FormControl('couple', [Validators.required]),
        specialExperience: new FormControl('', [Validators.required])
      }),
      step5: this.fb.group({
        checkInTime: new FormControl({hour: 10, minute: 30}, [Validators.required]),
        checkOutTime: new FormControl({hour: 12, minute: 30}, [Validators.required]),
        strictCheckIn: new FormControl('yes', [Validators.required])
      }),
      step6: this.fb.group({
        coverPhotoImg: new FormControl('', [Validators.required]),
        morePhotoImgs: new FormControl('', [Validators.required])
      }),
      step7: this.fb.group({
        entireApartment: new FormControl('Y', [Validators.required])
      }),
      step8: this.fb.group({
        apartmentName: new FormControl('', [Validators.required]),
        apartmentNumber: new FormControl('', [Validators.required])
      }),
      step9: this.fb.group({
        stayTypeName: new FormControl('Long Term', [Validators.required])
      }),
      step10: this.fb.group({
        sexCategory: new FormControl('', [Validators.required])
      }),
      step11: this.fb.group({
        multipleRoom: new FormControl('true', [Validators.required])
      }),
      step12: this.fb.group({
        accommodationName: new FormControl('PRIVATE', [Validators.required]),
        roomCount: new FormControl(1, [Validators.required]),
        roomCategory: new FormControl('cat1', [Validators.required])
      }),
      step13: this.fb.group({
        specialities: new FormControl('', [Validators.required]),
        amenities: new FormControl('', [Validators.required])
      }),
      step14: this.fb.group({
        roomVsImages: new FormControl('', [Validators.required])
      }),
      step15: this.fb.group({
        noOfGuest: new FormControl(1, [Validators.required]),
        noOfChild: new FormControl(0, [Validators.required]),
        cotAvailable: new FormControl('Y', [Validators.required]),
        numOfCot: new FormControl(0, [Validators.required])
      }),
      step16: this.fb.group({
        test: new FormControl('')
      }),
      step17: this.fb.group({
        test: new FormControl('')
      }),
      step18: this.fb.group({
        roomPricePerNight: new FormControl('', [Validators.required]),
        roomPricePerMonth: new FormControl('', [Validators.required]),
        cotPrice: new FormControl('', [Validators.required]),
        commission: new FormControl('', [Validators.required])
      }),
      step19: this.fb.group({
        hostDiscountWeekly: new FormControl('', [Validators.required]),
        hostDiscountMonthly: new FormControl('', [Validators.required]),
        priceDrop: new FormControl('Y', [Validators.required])
      }),
      step20: this.fb.group({
        cancellationSlab1: new FormControl('', [Validators.required]),
        cancellationSlab2: new FormControl('', [Validators.required]),
        cancellationSlab3: new FormControl('', [Validators.required])
      }),
      step21: this.fb.group({
        accountNumber: new FormControl('', [Validators.required]),
        accountHolderName: new FormControl('', [Validators.required]),
        accountType: new FormControl('Saving', [Validators.required]),
        bankName: new FormControl('', [Validators.required]),
        branchName: new FormControl('', [Validators.required]),
        ifscCode: new FormControl('', [Validators.required]),
      }),
      step22: this.fb.group({
        documentName: new FormControl('', [Validators.required]),
        documentNumber: new FormControl('', [Validators.required]),
        documentFile: new FormControl('', [Validators.required]),
      }),
      step23: this.fb.group({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required])
      }),
      step24: this.fb.group({
        contactName: new FormControl('', [Validators.required]),
        altMobile: new FormControl('', [Validators.required]),
        landline: new FormControl('', [Validators.required]),
        altEmail: new FormControl('', [Validators.required])
      })
    });
    console.log('Property Form =>', this.addPropertyForm);
  }

  submitPropertyForm() {
    console.log('Form =>', this.addPropertyForm);
  }

  onCoverImgChange($event) {
    let file = $event.target.files[0];
    this.addPropertyForm.patchValue({
      step6: {coverPhotoImg: file ? file.name : ''}
    });
  }

  onMorePhotoChange($event) {
    let file = $event.target.files[0];
    this.addPropertyForm.patchValue({
      step6: {morePhotoImgs: file ? file.name : ''}
    });
  }

  onMoreUploadRoomImages($event) {
    let file = $event.target.files[0];
    this.addPropertyForm.patchValue({
      step14: {roomVsImages: file ? file.name : ''}
    });
  }

  onDocumentUpload($event) {
    let file = $event.target.files[0];
    this.addPropertyForm.patchValue({
      step22: {documentFile: file ? file.name : ''}
    });
  }

  updateRoomCount(evt) {
    console.log('Room Count Changed =>', evt);
    this.addPropertyForm.patchValue({
      step12: {roomCount: evt}
    });
  }

  updateAdultCount(evt) {
    console.log('Adult Count Changed =>', evt);
    this.addPropertyForm.patchValue({
      step15: {noOfGuest: evt}
    });
  }

  updateChildCount(evt) {
    console.log('Child Count Changed =>', evt);
    this.addPropertyForm.patchValue({
      step15: {noOfChild: evt}
    });
  }

  updateCotCount(evt) {
    console.log('Cot Count Changed =>', evt);
    this.addPropertyForm.patchValue({
      step15: {noOfCot: evt}
    });
  }

  checkInTime = {hour: 10, minute: 30};
  checkOutTime = {hour: 12, minute: 30};
  meridian = true;

}
