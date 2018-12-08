import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property.component';

const routerConfig: Routes = [
  { path: '', component: PropertyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
