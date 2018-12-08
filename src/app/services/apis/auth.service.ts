import { Injectable } from '@angular/core';
import { AppConst } from '../../app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  LoginRequest,
  LoginResponse,
  LogoutResponse
} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL: string;
  private LOGOUT_URL: string;
  private FORGOT_PASS_URL: string;
  private RESET_PASS_URL: string;
  private CHANGE_PASSWORD_URL: string;

  constructor(
      private httpClient: HttpClient
    ) {
    this.LOGIN_URL = '/auth/login';
    this.LOGOUT_URL = '/auth/logout';
    this.FORGOT_PASS_URL = '/auth/forgot-password';
    this.RESET_PASS_URL = '/auth/reset-password';
    this.CHANGE_PASSWORD_URL = '/auth/update-password';
  }

  login(userDetails: LoginRequest) {
    return new Observable(observer => {
      const request = {
        'url': AppConst.API_BASE_URL + this.LOGIN_URL,
        'params': userDetails
      };
      this.httpClient.post<LoginResponse>(request.url, request.params).subscribe((response) => {
        console.log(response);
        if (response.status === AppConst.HTTP_STATUS.OK) {
          observer.next(response);
          observer.complete();
        } else {
          observer.error(response);
          observer.complete();
        }
      }, error => {
        console.log(error);
        observer.error(error);
        observer.complete();
      });
    });
  }

  logout() {
    return new Observable(observer => {
      const request = {
        'url': AppConst.API_BASE_URL + this.LOGOUT_URL
      };
      this.httpClient.get<LogoutResponse>(request.url).subscribe((response) => {
        if (response.status === 200) {
          localStorage.clear();
          observer.next(response);
          observer.complete();
        } else {
          observer.error(response);
          observer.complete();
        }
      }, error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  // forgotPassword(requestData: ForgotPasswordRequest) {
  //   return new Observable(observer => {
  //     const request = {
  //       'url': AppConst.API_BASE_URL + this.FORGOT_PASS_URL,
  //       'params': requestData
  //     };
  //     this.httpClient.post<ForgotPasswordResponse>(request.url, request.params).subscribe((response) => {
  //       if (response.status === AppConst.HTTP_STATUS.OK) {
  //         observer.next(response);
  //         observer.complete();
  //       } else {
  //         observer.error(response);
  //         observer.complete();
  //       }
  //     }, error => {
  //       console.log(error);
  //       observer.error(error);
  //       observer.complete();
  //     });
  //   });
  // }

  // resetPassword(requestData: ResetPasswordRequest) {
  //   return new Observable(observer => {
  //     const request = {
  //       'url': AppConst.API_BASE_URL + this.RESET_PASS_URL,
  //       'params': requestData
  //     };
  //     this.httpClient.post<ResetPasswordResponse>(request.url, request.params).subscribe((response) => {
  //       if (response.status === AppConst.HTTP_STATUS.OK) {
  //         observer.next(response);
  //         observer.complete();
  //       } else {
  //         observer.error(response);
  //         observer.complete();
  //       }
  //     }, error => {
  //       console.log(error);
  //       observer.error(error);
  //       observer.complete();
  //     });
  //   });
  // }
  // updatePassword(passwordinfo): Observable<ChangePassword> {
  //   const request = {
  //     'url': AppConst.API_BASE_URL + this.CHANGE_PASSWORD_URL
  //   };

  //   return this.httpClient.put<ChangePassword>(request.url, passwordinfo);

  // }
}
