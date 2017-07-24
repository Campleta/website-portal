import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NotAuthorizedComponent } from './shared/not-authorized/not-authorized.component';
import { LoginComponent } from './shared/login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'portal', loadChildren: 'app/portal/portal.module#PortalModule'},
    { path: 'unauthorized', component: NotAuthorizedComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule { }