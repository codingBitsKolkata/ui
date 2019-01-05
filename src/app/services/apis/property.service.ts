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
 /**
	 * Method used to get property types
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof PropertyService
	 */
  searchProperties(requestParam: any): Observable<any> {
    // console.log('here');
    const request = {
      'url': AppConst.PROPERTY_API_BASE_URL + '/fetch-properties',
      'params' : requestParam
    };
    return this.httpClient.post<any>(request.url, request.params);
    // const request = {
    //    'url':  'assets/static-data/property-list.json'
    // };
    // return this.httpClient.get<any>(request.url, {params: requestParam});
  }

  getMasterRatingsList(requestParam: any): Observable<any> {
    const request = {
        'url': AppConst.PROPERTY_API_BASE_URL + '/ratings'
     };
     return this.httpClient.get<any>(request.url, {params: requestParam});
  }

  getMasterBudgetsList(requestParam: any): Observable<any> {
    const request = {
        'url': AppConst.PROPERTY_API_BASE_URL + '/budgets'
     };
     return this.httpClient.get<any>(request.url, {params: requestParam});
  }

  getMasterAmenitiesList(requestParam: any): Observable<any> {
    const request = {
        'url': AppConst.PROPERTY_ADD_API_BASE_URL + '/fetch-amenities-for-filter'
     };
     return this.httpClient.post<any>(request.url, {params: requestParam});
  }

  getPropertyByType(requestParam: any): Observable<any> {
    // console.log('here');
    // const request = {
    //   'url': AppConst.PROPERTY_API_BASE_URL + '/fetch-properties-by-type',
    //   'params' : requestParam
    // };
    // return this.httpClient.post<any>(request.url, request.params);
    const request = {
       // 'url':  'assets/static-data/home-page-property-list.json'
        'url': AppConst.PROPERTY_API_BASE_URL + '/fetch-properties-by-type'
     };
     return this.httpClient.get<any>(request.url, {params: requestParam});
  }

  getHostPropertyList(): Observable<any> {
    // console.log('here');
    const request = {
      'url': AppConst.PROPERTY_ADD_API_BASE_URL + '/list-property',
      'params' : { 'userToken': '844c6cb6-ff8f-45dc-9cc5-d6e9ce36c7b7'}
    };
    return this.httpClient.post<any>(request.url, request.params);
  }
}
