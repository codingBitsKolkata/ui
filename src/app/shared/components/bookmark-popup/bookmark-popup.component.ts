import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStorageProvider } from '../../../services/storage/user-storage.service';

@Component({
  selector: 'app-bookmark-popup',
  templateUrl: './bookmark-popup.component.html',
  styleUrls: ['./bookmark-popup.component.scss']
})
export class BookmarkPopupComponent implements OnInit {
  @Input() bookmarkObj: object;
  userInfo: any;
  isLogined = false;

  constructor(
    private modalService: NgbModal,
    private userStorage: UserStorageProvider,
    ) {
      this.userInfo = this.userStorage.get();
      if (this.userInfo) {
        this.isLogined = true;
      }
      if(this.bookmarkObj !== {}){
        console.log("bookmark object");
        console.log(this.bookmarkObj);
      }
  }

  ngOnInit() {
    if(this.bookmarkObj !== {}){
      console.log("bookmark object");
      console.log(this.bookmarkObj);
    }

  }
  openComingSoon(content) {
    this.modalService.open(content, { windowClass: 'modal-popup', size: 'sm', centered: true });
  }

}
