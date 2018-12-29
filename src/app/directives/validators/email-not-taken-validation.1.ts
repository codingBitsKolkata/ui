import {AsyncValidatorFn , ValidationErrors, AbstractControl} from '@angular/forms';
import { AuthService } from '../../services/apis/auth.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export function ValidateEmailNotTaken(authSrv: AuthService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return authSrv.checkEmailExist(control.value).map( res => {
      return res ? null : { emailTaken: true };
    }, error => {
      console.log(error);
      return { emailTaken: true };
    });
  };
}
