import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth-guard.service';

import { PortalComponent } from './portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './../shared/login/login.component';

const portalRoutes: Routes = [
  {
    path: '',
    component: PortalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: DashboardComponent },
          { path: 'login', component: LoginComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(portalRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class PortalRoutingModule { }
