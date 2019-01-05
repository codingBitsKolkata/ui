import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService} from '../../services/shared.service';
import { PropertyService } from '../../services/apis/property.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  public checkboxGroupForm: FormGroup;
  propertyList: Array<any>;
  ratingsFliterList: Array<any>;
  amenitiesFliterList: Array<any>;
  budgetsFliterList: Array<any>;
  mapShowHide  = true;
  propertyTypes: Array<any>;
  searchPropertyType: string;
  Object = Object;
  sharedHomeSearchData: any;

  constructor(
    private formBuilder: FormBuilder,
    private sharedSrv: SharedService,
    private srvProperty: PropertyService
    ) {
      this.propertyList = [];
      this.ratingsFliterList = [];
      this.amenitiesFliterList = [];
      this.budgetsFliterList = [];
      this.propertyTypes = [];
      this.getPropertyTypes();
      this.getMasterAmenitiesList();
      this.getMasterBudgetsList();
      this.getMasterRatingsList();
    }

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      excellent: false,
      very_good: false,
      good: false,
      all_of_kolkata: true,
      saltlake: false,
      parkstreet: false,
      all_facilities: false,
      airconditioner: false,
      wifi: false,
      television: false,
      under_299: false,
      under_299_999: false,
      under_999_1499: true,
      under_1499_1999: false,

      popularity: false,
      price_lowest_first: false,
      couples_frindly: false,
      pet_friendly: false
    });
    const sharedHomeSearchData = this.sharedSrv.sharedHomeSearchData;
    console.log(sharedHomeSearchData);
    const isSearchObjEmpty = !Object.keys(sharedHomeSearchData).length;
    console.log(isSearchObjEmpty);
    if (!isSearchObjEmpty) {
      this.sharedHomeSearchData = sharedHomeSearchData;
      this.getPropertyList(sharedHomeSearchData);
    } else {
      const searchObj = JSON.parse(localStorage.getItem('searchObj'));
      this.getPropertyList(searchObj);
      this.sharedHomeSearchData = searchObj;
    }

  }

  getPropertyList(params: any) {
      this.srvProperty.searchProperties(params).subscribe((res) => {
        console.log('searchProperties data', res);
        if (res.responseCode === '200') {
           this.propertyList = res.responseBody;
           console.log(this.propertyList);
        }
      }, error => {
        console.log('error', error);
      });
    }
    getMasterRatingsList() {
      this.srvProperty.getMasterRatingsList({}).subscribe((res) => {
        console.log('getMasterRatingsList data', res);
        if (res.responseCode === '200') {
           this.ratingsFliterList = res.responseBody;
        }
      }, error => {
        console.log('error', error);
      });
    }
    getMasterAmenitiesList() {
      this.srvProperty.getMasterAmenitiesList({}).subscribe((res) => {
        console.log('getMasterAmenitiesList data', res);
        if (res.responseCode === '200') {
           this.amenitiesFliterList = res.responseBody;
        }
      }, error => {
        console.log('error', error);
      });
    }
    getMasterBudgetsList() {
      this.srvProperty.getMasterBudgetsList({}).subscribe((res) => {
        console.log('getMasterBudgetsList data', res);
        if (res.responseCode === '200') {
           this.budgetsFliterList = res.responseBody;
        }
      }, error => {
        console.log('error', error);
      });
    }
    getPropertyTypes() {
      this.srvProperty.getPropertyTypes({}).subscribe((res) => {
       console.log('getPropertyTypes data', res);
       if (res.responseCode === '200') {
          this.propertyTypes =  res.responseBody;
       }
     }, error => {
       console.log('error', error);
     });
   }
   getPropertyTypeName(propertyTypeId: number) {
    const propertyTypes = this.propertyTypes;
    const propertyType =  propertyTypes.filter(x => x.propertyTypeId === propertyTypeId)[0];
    this.searchPropertyType = propertyType.name;
   }
  }
