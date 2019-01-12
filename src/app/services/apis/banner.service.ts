import { Injectable } from '@angular/core';
import { AppConst } from '../../app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private httpClient: HttpClient
  ) {

    }
     /**
	 * Method used to get list of Banner
	 * @returns {Observable<any>}
	 * @memberof BannerService
	 */
  getBanner(): Observable<any> {
    const request = {
     // 'url':  'assets/static-data/fetch-Banners.json'
      'url': AppConst.BANNER_API_BASE_URL + '/fetch-banners'
    };
    return this.httpClient.get<any>(request.url);
  }
}
