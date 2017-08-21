import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './services/guards/auth-guard.service';
import { PortalGuard } from './services/guards/portal-guard.service';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { PortalModule } from './portal/portal.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './shared/login/login.component';

import { AuthHttpProvider } from './services/auth-http.service';
import { BookingService } from './services/booking.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './directives/alert/alert.component';
import { NotAuthorizedComponent } from './shared/not-authorized/not-authorized.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    PageNotFoundComponent,
    LoginComponent,
    NotAuthorizedComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    PortalModule,
    AppRoutingModule
  ],
  providers: [
    AuthHttpProvider,
    AuthHttp,
    AlertService,
    AuthenticationService,
    BookingService,
    AuthGuard,
    PortalGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
