import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';
import { ProfileService } from '../../../services/apis/profile.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit, AfterViewInit {
  userProfileDetails: {};
  languageList: Array<any>;
  domainList: Array<any>;
  interestList: Array<any>;
  languageDropdownSettings = {};
  interestDropdownSettings = {};
  domainDropdownSettings = {};
  userRole;
  userDetails;

  sectionScroll: string;
  constructor(private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private srvProfile: ProfileService) { 
      this.userProfileDetails = {};
      this.languageList = [];
      this.domainList = [];
      this.interestList = [];
      this.getUserProfileDetails();
      this.getLanguageList();
      this.getDomainList();
      this.getInterestList();

  }

  openModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup' });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScrollToDiv();
      this.sectionScroll = null;
    });

    this.languageDropdownSettings = {
      singleSelection: false,
      idField: 'languageId',
      textField: 'description',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.interestDropdownSettings = {
      singleSelection: false,
      idField: 'interestId',
      textField: 'interestName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.domainDropdownSettings = {
      singleSelection: false,
      idField: 'domainId',
      textField: 'domainName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  scrollToDiv(page, dest) {
    this.sectionScroll = dest;
    this.router.navigate([page], {fragment: dest});
   // this.doScrollToDiv();
  }

  doScrollToDiv() {
    if (!this.sectionScroll && this.sectionScroll == null) {
      return;
    }
    try {
      console.log(this.sectionScroll);
      const element = document.getElementById(this.sectionScroll);
      element.scrollIntoView({behavior: 'smooth'});
    }
    finally {
      this.sectionScroll = null;
    }
  }

  // GET User Profile Detais
  getUserProfileDetails() {
    this.srvProfile.getUserDetails({}).subscribe((res) => {
      if (res.responseCode === '200') {
          this.userProfileDetails = res.responseBody;
          if(this.userProfileDetails['userVsTypes'].length > 0){
            if(this.userProfileDetails['userVsTypes'].length == 1){
              if(parseInt(this.userProfileDetails['userVsTypes'][0].userType.userTypeId) == 2){
                this.userRole = 2;
                this.router.navigateByUrl('/dashboard/bookings');
              }
            }else{
              this.userRole = 1;
            }
            console.log("User Role: " + this.userRole);
          }
      }
    }, error => {
      console.log('error', error);
    });
  }

  // GET Language List
  getLanguageList() {
    this.srvProfile.getLanguageList().subscribe((res) => {
      if (res.responseCode === '200') {
          this.languageList = res.responseBody;
      }
    }, error => {
      console.log('error', error);
    });
  }

  // GET User Profile Detais
  getDomainList() {
    this.srvProfile.getDomainList().subscribe((res) => {
      if (res.responseCode === '200') {
          this.domainList = res.responseBody;
      }
    }, error => {
      console.log('error', error);
    });
  }

  // GET User Profile Detais
  getInterestList() {
    this.srvProfile.getInterestList().subscribe((res) => {
      if (res.responseCode === '200') {
          this.interestList = res.responseBody;
      }
    }, error => {
      console.log('error', error);
    });
  }

  getShortName(fullName) { 
    return fullName.split(' ').map(n => n[0]).join('');
  }

}
