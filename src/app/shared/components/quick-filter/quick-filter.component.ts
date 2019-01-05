import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService} from '../../../services/shared.service';
import { PropertyService } from '../../../services/apis/property.service';

@Component({
  selector: 'app-quick-filter',
  templateUrl: './quick-filter.component.html',
  styleUrls: ['./quick-filter.component.scss']
})
export class QuickFilterComponent implements OnInit {

  public checkboxGroupForm: FormGroup;
  ratingsFliterList: Array<any>;
  amenitiesFliterList: Array<any>;
  budgetsFliterList: Array<any>;
  Object = Object;

  constructor(
    private formBuilder: FormBuilder,
    private sharedSrv: SharedService,
    private srvProperty: PropertyService
    ) {
      this.ratingsFliterList = [];
      this.amenitiesFliterList = [];
      this.budgetsFliterList = [];
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

}
