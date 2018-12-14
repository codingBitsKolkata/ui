import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';

const routerConfig: Routes = [
  // { path: '' , loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'properties' , loadChildren: './modules/property/property.module#PropertyModule' },
  { path: '' , loadChildren: './modules/design/design.module#DesignModule' },
  { path: 'page-not-found', component: ErrorComponent },
  { path: '**' , redirectTo: 'page-not-found' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routerConfig, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
