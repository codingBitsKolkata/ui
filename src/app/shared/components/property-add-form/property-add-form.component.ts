import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PropertyService } from '../../../services/apis/property.service';

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
    private fb: FormBuilder,
    private srvProperty: PropertyService,
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
        name: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required])
      }),
      step3: this.fb.group({
        guestAccess: new FormControl('', [Validators.required]),
        places: new FormControl('', [Validators.required])
      }),
      step4: this.fb.group({
        ruleName: new FormControl('couple', [Validators.required]),
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
        roomPricePerNight: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        roomPricePerMonth: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        cotPrice: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        commission: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.max(100), Validators.min(0)])
      }),
      step19: this.fb.group({
        hostDiscountWeekly: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.max(100), Validators.min(0)]),
        hostDiscountMonthly: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.max(100), Validators.min(0)]),
        priceDrop: new FormControl('Y', [Validators.required])
      }),
      step20: this.fb.group({
        cancellationSlab1: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.max(100), Validators.min(0)]),
        cancellationSlab2: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.max(100), Validators.min(0)]),
        cancellationSlab3: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.max(100), Validators.min(0)])
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
        altMobile: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.maxLength(10)]),
        landline: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
        altEmail: new FormControl('', [Validators.required, Validators.email])
      })
    });
    console.log('Property Form =>', this.addPropertyForm);
  }

  specialExperienceArr () {
    let arr = [];
    this.addPropertyForm.get('step4')['controls'].specialExperience.value.forEach(exp => {
       arr.push({
        "specialExperience": { 
          "experienceId": exp.item_id,
          "experienceName": exp.item_text
        }
      })
    })
    return arr;
  }

  submitPropertyForm() {
    console.log('Form =>', this.addPropertyForm);
    // const arr: Array<object> = this.specialExperienceArr();
    console.log('Arr =>',  this.specialExperienceArr());
    
    const addPropertyRequest = {
      "name": this.addPropertyForm.get('step2')['controls'].name.value,
      "address": this.addPropertyForm.get('step2')['controls'].address.value,
      "latitude": "22.582490",
      "longitude": "88.426787",
      "entireApartment": this.addPropertyForm.get('step7')['controls'].entireApartment.value,
      "apartmentName": this.addPropertyForm.get('step8')['controls'].apartmentName.value,
      "apartmentNumber": this.addPropertyForm.get('step8')['controls'].apartmentNumber.value,
      "startDate": this.addPropertyForm.get('step23')['controls'].startDate.value,
      "endDate": this.addPropertyForm.get('step23')['controls'].endDate.value,
      "checkinTime": this.addPropertyForm.get('step5')['controls'].checkinTime.value,
      "checkoutTime": this.addPropertyForm.get('step5')['controls'].checkoutTime.value,
      "userToken": "89ef239b-973f-4655-b691-4064e61910f9",
      "strictCheckin": this.addPropertyForm.get('step5')['controls'].strictCheckin.value,
      "coverImageUrl": this.addPropertyForm.get('step6')['controls'].coverPhotoImg.value,
      "priceDrop": this.addPropertyForm.get('step19')['controls'].priceDrop.value,
      "immediateBooking": "Y",
      "languageId": "1",
      "contactName": this.addPropertyForm.get('step24')['controls'].contactName.value,
      "altMobile": this.addPropertyForm.get('step24')['controls'].altMobile.value,
      "landline": this.addPropertyForm.get('step24')['controls'].landline.value,
      "altEmail": this.addPropertyForm.get('step24')['controls'].altEmail.value,
      "advancePercentage": "100",
      "sexCategory": this.addPropertyForm.get('step10')['controls'].sexCategory.value,
      "propertyType": {
        "name": this.addPropertyForm.get('step1')['controls'].propertyType.value,
        "propertyTypeId": "1"
      },
      "propertyVsDescriptions": [
        {
          "description": this.addPropertyForm.get('step1')['controls'].description.value,
          "languageId": "1"
        }
      ],   "propertyVsPriceDrops": [
          {
            "status": 1,
            "createdDate": "2018-12-29 22:03:23",
            "createdBy": 1,
            "modifiedDate": null,
            "modifiedBy": null,
            "userToken": null,
            "languageId": null,
            "propertyPDropId": "59",
            "percentage": "0",
            "property": null,
            "priceDrop": {
              "status": 1,
              "createdDate": "2018-09-06 01:27:34",
              "createdBy": 1,
              "modifiedDate": null,
              "modifiedBy": null,
              "userToken": null,
              "languageId": null,
              "priceDropId": "1",
              "afterTime": "8",
              "propertyVsPriceDrops": null
            }
          },
          {
            "status": 1,
            "createdDate": "2018-12-29 22:03:23",
            "createdBy": 1,
            "modifiedDate": null,
            "modifiedBy": null,
            "userToken": null,
            "languageId": null,
            "propertyPDropId": "60",
            "percentage": "0",
            "property": null,
            "priceDrop": {
              "status": 1,
              "createdDate": "2018-09-06 01:27:34",
              "createdBy": 1,
              "modifiedDate": null,
              "modifiedBy": null,
              "userToken": null,
              "languageId": null,
              "priceDropId": "2",
              "afterTime": "11",
              "propertyVsPriceDrops": null
            }
          }
        ],
      "propertyVsDocuments": [
        {
          "documentNumber": "AKBHP6784S",
          "fileUrl": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg",
          "document": {
            "documentId": "1",
            "documentName": "PAN CARD"
          }
        },
        {
          "documentNumber": "",
          "fileUrl": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg",
          "document": {
            "documentId": "2",
            "documentName": "CANCELLED CHEQUE"
          }
        }
      ],
      "propertyVsGuestAccess": [
        {
          "guestAccess": "Guest Can Access Terrace",
          "languageId": "1"
        },
        {
          "guestAccess": "Access To Lawn",
          "languageId": "1"
        }
      ],
      "propertyVsImages": [
        {
          "imageURL": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg"
        },
        {
          "imageURL": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg"
        },
        {
          "imageURL": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg"
        }
      ],
      "propertyVsNearbys": [
        {
          "places": "RS Software"
        },
        {
          "places": "SDF"
        },
        {
          "places": "Nicco Park"
        }
      ],
      "propertyVsSpaceRules": [
        {
          "answer": "Y",
          "spaceRule": {
            "spruleId": "1",
            "ruleName": "Smoking"
          }
        },
        {
          "answer": "N",
          "spaceRule": {
            "spruleId": "2",
            "ruleName": "Drinking"
          }
        }
      ],
      "propertyVsSpecialExperiences": this.specialExperienceArr(),
      "rooms": [
        { 
          "cotAvailable": "Y",
          "noOfChild": "1",
          "noOfGuest": "2",
          "numOfCot": "1",
          "sharedSpace": "N",
          "accommodationName": "PRIVATE",
          "noOfBeds": "",
          "roomPricePerNight": "1500",
          "roomPricePerMonth": "",
          "sharedBedPricePerNight": "",
          "sharedBedPricePerMonth": "",
          "cotPrice": "200",
          "sharedBedPrice": "",
          "commission": "5",
          "hostDiscountWeekly": "2",
          "hostDiscountMonthly": "",
          "roomCategory": {
            "roomCatId": "1",
            "name": "Delux"
          },
              
               "roomVsCancellations": [
            {
              "percentage": "50",
              "cancellationSlab": {
                "cancellationSlabId": "1"
              }
            },
            {
              "percentage": "40",
              "cancellationSlab": {
                "cancellationSlabId": "2"
              }
            }
          ],
          "roomVsAmenities": [
            {
              "amenities": {
                "aminitiesId": "1",
                "aminitiesName": "WIFI"
              }
            }
          ],
          "roomVsCancellation": [
            {
              "percentage": "50",
              "cancellationSlab": {
                "cancellationSlabId": "1"
              }
            },
            {
              "percentage": "40",
              "cancellationSlab": {
                "cancellationSlabId": "2"
              }
            }
          ],
          "roomVsImages": [
            {
              "imageURL": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg"
            },
            {
              "imageURL": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg"
            },
            {
              "imageURL": "https://s-ec.bstatic.com/images/hotel/max1024x768/141/141830278.jpg"
            }
          ],
          "roomVsMeals": [
            {
              "mealPlan": {
                "mealPlanId": "1",
                "mealPlanName": "Break Fast"
              },
              "mealDaysSunday": "Y",
              "mealDaysMonday": "Y",
              "mealDaysTuesday": "Y",
              "mealDaysWednesday": "Y",
              "mealDaysThursday": "Y",
              "mealDaysFriday": "Y",
              "mealDaysSaturday": "Y",
                      "mealTypeSunday": "BOTH",
              "mealTypeMonday": "BOTH",
              "mealTypeTuesday": "BOTH",
              "mealTypeWednesday": "BOTH",
              "mealTypeThursday": "BOTH",
              "mealTypeFriday": "BOTH",
              "mealTypeSaturday": "BOTH",
              "mealPriceCategorySunday": "COMPLIMENTARY",
              "mealPriceCategoryMonday": "COMPLIMENTARY",
              "mealPriceCategoryTuesday": "COMPLIMENTARY",
              "mealPriceCategoryWednesday": "COMPLIMENTARY",
              "mealPriceCategoryThursday": "COMPLIMENTARY",
              "mealPriceCategoryFriday": "COMPLIMENTARY",
              "mealPriceCategorySaturday": "COMPLIMENTARY"
              
            }
          ],
          "roomVsSpecialities": [
            {
              "specialties": {
                "specialitiesName": "Mountain Facing",
                "specialtiesId": "1"
              }
            },
            {
              "specialties": {
                "specialitiesName": "Sea Facing",
                "specialtiesId": "2"
              }
            }
          ]
        }
      ],
      "stayType": {
        "stayTypeId": "2",
        "stayTypeName": "Short Term"
      },
      "hostVsAccount": {
        "accountHolderName": "Sudeep Chhetri",
        "accountNumber": "159883741610",
        "accountType": "Saving",
        "bankName": "IndusInd Bank",
        "branchName": "Sector V",
        "ifscCode": "IND0015478"
      }
    }
        
    this.srvProperty.addProperty(addPropertyRequest).subscribe((res) => {
      console.log('Propert Add Dadadata', res);
      if (res.responseCode === '200') {
         
      }
    }, error => {
      console.log('error', error);
    });
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

  printForm() {
    console.log('Form =>', this.addPropertyForm);    
  }

  checkInTime = {hour: 10, minute: 30};
  checkOutTime = {hour: 12, minute: 30};
  meridian = true;

}
