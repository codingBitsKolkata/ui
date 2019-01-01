import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ModalComponent } from './components/modal/modal.component';
import { TestModalComponent } from './components/test-modal/test-modal.component';
import { WhiteSpaceValidator} from '../directives/validators/white-space-validation';
import { equalvalidator} from '../directives/validators/equal-validator';
import { FileValidator} from '../directives/validators/file-validation';
import { NumberPickerModule } from 'ng-number-picker';
import { FormWizardModule } from 'angular2-wizard';
import { TagInputModule } from 'ngx-chips';
import { NguCarouselModule } from '@ngu/carousel';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { StaySearchFormComponent } from './components/stay-search-form/stay-search-form.component';
import { FlightSearchFormComponent } from './components/flight-search-form/flight-search-form.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    ModalComponent,
    TestModalComponent,
    WhiteSpaceValidator,
    FileValidator,
    StaySearchFormComponent,
    FlightSearchFormComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    UiSwitchModule,
    NumberPickerModule,
    FormWizardModule,
    TagInputModule,
    NguCarouselModule,
    HighchartsChartModule,
    NgMultiSelectDropDownModule
  ],
  exports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    UiSwitchModule,
    ModalComponent,
    TestModalComponent,
    WhiteSpaceValidator,
    FileValidator,
    NumberPickerModule,
    FormWizardModule,
    TagInputModule,
    NguCarouselModule,
    HighchartsChartModule,
    NgMultiSelectDropDownModule,
    SearchFormComponent
  ],
  entryComponents: [
    TestModalComponent
  ]
})
export class SharedModule { }
