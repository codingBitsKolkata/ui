import { Injectable } from '@angular/core';
import { AppConst } from '../../app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  LoginRequest,
  LoginResponse,
  LogoutResponse
} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {

    }

  /**
	 * Method used to get all the countries list
	 *
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  getCountries(): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/fetch-countries'
    };
    return this.httpClient.get<any>(request.url);
  }

  /**
	 * Method used to login user
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  login(requestParam: any): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/login',
      'params' : requestParam
    };
    return this.httpClient.post<any>(request.url, request.params);
  }

  /**
	 * Method used to validate login otp
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  validateLoginOtp(requestParam: any): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/validate-login-otp',
      'params' : requestParam
    };
    return this.httpClient.post<any>(request.url, request.params);
  }

  /**
	 * Method used to resend otp
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  resendOtp(requestParam: any): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/resend-otp',
      'params' : requestParam
    };
    return this.httpClient.post<any>(request.url, request.params);
  }

   /**
	 * Method used to register new user
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  signUp(requestParam: any): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/sign-up',
      'params' : requestParam
    };
    return this.httpClient.post<any>(request.url, request.params);
  }

  /**
	 * Method used to validate signup otp
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  validateSignUpOtp(requestParam: any): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/validate-otp',
      'params' : requestParam
    };
    return this.httpClient.post<any>(request.url, request.params);
  }
    /**
	 * Method used to check email id exist
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  checkEmailExist(requestParam: any): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/check-email',
      'params' : { email: requestParam}
    };
    return this.httpClient.post<any>(request.url, request.params);
  }
    /**
	 * Method used to check mobile number exist
	 * @param {any} requestParam
	 * @returns {Observable<any>}
	 * @memberof AuthService
	 */
  checkMobileExist(requestParam: any): Observable<any> {
    const request = {
      'url': AppConst.AUTH_API_BASE_URL + '/check-mobile',
      'params' : { mobile: requestParam}
    };
    return this.httpClient.post<any>(request.url, request.params);
  }
}
