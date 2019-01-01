import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HostPropertyListComponent } from './host-property-list/host-property-list.component';
import { HostPropertyDetailsComponent } from './host-property-details/host-property-details.component';

const routerConfig: Routes = [
  {
     path: '',
     component: DashboardComponent,
     children: [
      {
          path: '',
          component: HostPropertyListComponent
      },
      {
        path: 'property-details',
        component: HostPropertyDetailsComponent
     },
  ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
