import { Injectable } from '@angular/core';
import { AppConst } from '../../app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(
    private httpClient: HttpClient
  ) {

  }
  getAirport(requestParam: any): Observable<any> {
    const request = {
        'url': AppConst.FLIGHT_API_BASE_URL + '/search-airport-details'
     };
     return this.httpClient.get<any>(request.url, {params: requestParam}) .map(res => {
      return res.responseBody;
  });
  }
}
