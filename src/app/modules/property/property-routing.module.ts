import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routerConfig: Routes = [
 // { path: '', redirectTo: 'properties', pathMatch: 'full'},
  { path: '', component: PropertyComponent},
  { path: 'property-details', component: PropertyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
