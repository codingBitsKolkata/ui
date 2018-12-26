import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  currentJustify = 'justified';

  loginFormSelectedTab: string;
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public loading: boolean;
  constructor(private activeModal: NgbActiveModal) {

  }
  ngOnInit() {
    console.log(this.loginFormSelectedTab);
  }
  closeModal() {
    this.activeModal.close();

  }
}
