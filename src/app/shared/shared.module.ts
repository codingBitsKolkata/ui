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

@NgModule({
  declarations: [ModalComponent, TestModalComponent, WhiteSpaceValidator, FileValidator],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    UiSwitchModule,
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
    FileValidator
  ],
  entryComponents: [
    TestModalComponent
  ]
})
export class SharedModule { }
