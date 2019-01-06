import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-quick-stay-search-form',
  templateUrl: './quick-stay-search-form.component.html',
  styleUrls: ['./quick-stay-search-form.component.scss']
})
export class QuickStaySearchFormComponent implements OnInit {

  @Input() searchObj: object;
  @Input() propertyDetails: object;
  @Output() searchFormSubmitted  = new EventEmitter<any>();
  constructor(
    private modalService: NgbModal,
    private sharedSrv: SharedService,
  ) {
  }

  ngOnInit() {
    console.log('QuickStaySearchFormComponent', this.searchObj);
  }
  openModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup host-details' });
}

}
