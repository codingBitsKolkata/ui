import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routerConfig: Routes = [
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
