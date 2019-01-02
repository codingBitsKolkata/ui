import { Injectable } from '@angular/core';
import { AppConst } from '../../app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private httpClient: HttpClient
  ) {

    }
   /**
	 * Method used to get property types
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof PropertyService
	 */
  getPropertyTypes(requestParam: any): Observable<any> {
    // console.log('here');
    const request = {
      'url': AppConst.PROPERTY_ADD_API_BASE_URL + '/fetch-property-types',
      'params' : requestParam
    };
    return this.httpClient.post<any>(request.url, request.params);
  }

  getPropertyList(requestParam: any): Observable<any> {
    // console.log('here');
    // const request = {
    //   'url': AppConst.PROPERTY_API_BASE_URL + '/fetch-properties',
    //   'params' : requestParam
    // };
    // return this.httpClient.post<any>(request.url, request.params);
    const request = {
       'url':  'assets/static-data/fetch-testimonials.json'
       // 'url': AppConst.PROPERTY_API_BASE_URL + '/fetch-properties'
     };
     return this.httpClient.get<any>(request.url, {params: requestParam});
  }
}
