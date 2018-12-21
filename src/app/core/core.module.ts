import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, ErrorComponent]
})
export class CoreModule { }
