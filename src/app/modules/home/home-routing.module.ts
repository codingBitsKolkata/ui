import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routerConfig: Routes = [
  { path: '', component: HomeComponent},
  { path: 'testimonial', component: TestimonialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
