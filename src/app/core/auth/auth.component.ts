import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginFormSelectedTab: string;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.loginFormSelectedTab);
  }
  closeModal() {
    this.activeModal.close();

  }
}
