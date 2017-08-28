import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class BookingService {

  constructor(private authHttp: AuthHttpService, private authService: AuthenticationService) { }

  createReservation(data: any) {
    let options = new RequestOptions({headers: this.getHeaders()});

    return this.authHttp.post(`api/reservations`, data, options)
      .map((response: Response) => {
        return response.json();
      });
  }

  getNotPlacedReservations() {
    let options = new RequestOptions({headers: this.getHeaders()});

    return this.authHttp.get(`api/reservations/${this.authService.campsite.id}/notApproved`, options)
      .map((response: Response) => {
        return response.json();
      });
  }

  getAreaTypesForCampsite() {
    let options = new RequestOptions({headers: this.getHeaders()});

    return this.authHttp.get(`api/areaTypes/${this.authService.campsite.id}`, options)
      .map((response: Response) => {
        return response.json();
      })
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return headers;
  }
}