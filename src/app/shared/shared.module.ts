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
import { AgmCoreModule } from '@agm/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { DragScrollModule } from 'ngx-drag-scroll';
import { EarningCalculatorComponent } from './components/earning-calculator/earning-calculator.component';
import { QuickFilterComponent } from './components/quick-filter/quick-filter.component';
import { QuickStaySearchFormComponent } from './components/quick-stay-search-form/quick-stay-search-form.component';


@NgModule({
  declarations: [
    ModalComponent,
    TestModalComponent,
    WhiteSpaceValidator,
    FileValidator,
    StaySearchFormComponent,
    FlightSearchFormComponent,
    SearchFormComponent,
    EarningCalculatorComponent,
    QuickFilterComponent,
    QuickStaySearchFormComponent
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
    NgMultiSelectDropDownModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe6MGWAXjP0KZo4jH6qPCPwsXirwMEV0Q',
      libraries: ['places']
    }),
    NgxGalleryModule,
    DragScrollModule
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
    NgxGalleryModule,
    DragScrollModule,
    SearchFormComponent,
    AgmCoreModule,
    EarningCalculatorComponent,
    StaySearchFormComponent,
    QuickFilterComponent,
    QuickStaySearchFormComponent
  ],
  entryComponents: [
    TestModalComponent
  ]
})
export class SharedModule { }
