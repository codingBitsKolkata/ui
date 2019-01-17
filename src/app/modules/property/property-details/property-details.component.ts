import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService} from '../../../services/shared.service';
import { PropertyService } from '../../../services/apis/property.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  propertyDetails: object;
  propertyId: number;
  searchObj: object;
  as_leftNavDisabled = false;
  as_rightNavDisabled = false;
  loading: boolean;
//   ls_leftNavDisabled = false;
//   ls_rightNavDisabled = false;

  // Ameni Slider
  @ViewChild('ameniSlider', {read: DragScrollComponent}) as: DragScrollComponent;
  // Location Slider
//   @ViewChild('locationSlider', {read: DragScrollComponent}) ls: DragScrollComponent;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(
      private modalService: NgbModal,
      private sharedSrv: SharedService,
      private srvProperty: PropertyService,
      private router: Router
      ) {
        this.loading = false;
      }


  ngOnInit(): void {
    const sharedHomeSearchData = this.sharedSrv.sharedHomeSearchData;
    const isSearchObjEmpty = !Object.keys(sharedHomeSearchData).length;
    if (!isSearchObjEmpty) {
      this.getPropertyDetails(sharedHomeSearchData);
      this.searchObj = sharedHomeSearchData;
      this.propertyId = sharedHomeSearchData['propertyId'];
    } else {
      const searchObj = JSON.parse(localStorage.getItem('searchObj'));
      this.getPropertyDetails(searchObj);
      this.searchObj = searchObj;
      this.propertyId = searchObj['propertyId'];
    }

      this.galleryOptions = [
        {   
            width: '100%',
            height: '100%',
            "imageArrows": true, 
            "imageSwipe": true, 
            "thumbnailsArrows": false, 
            "thumbnailsSwipe": true, 
            "previewSwipe": true 
        },
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
      ];

      this.galleryImages = [
          {
              small: 'assets/images/property-details/gallery/big-slide-1.png',
              medium: 'assets/images/property-details/gallery/big-slide-1.png',
              big: 'assets/images/property-details/gallery/big-slide-1.png'
          },
          {
              small: 'assets/images/property-details/gallery/big-slide-2.jpg',
              medium: 'assets/images/property-details/gallery/big-slide-2.jpg',
              big: 'assets/images/property-details/gallery/big-slide-2.jpg'
          },
          {
              small: 'assets/images/property-details/gallery/big-slide-3.jpg',
              medium: 'assets/images/property-details/gallery/big-slide-3.jpg',
              big: 'assets/images/property-details/gallery/big-slide-3.jpg'
          },
          {
              small: 'assets/images/property-details/gallery/big-slide-4.jpg',
              medium: 'assets/images/property-details/gallery/big-slide-4.jpg',
              big: 'assets/images/property-details/gallery/big-slide-4.jpg'
          }
      ];
  }
    moveLeft_as() {
        this.as.moveLeft();
    }

    moveRight_as() {
        this.as.moveRight();
    }
    leftBoundStat_as(reachesLeftBound: boolean) {
        this.as_leftNavDisabled = reachesLeftBound;
    }

    rightBoundStat_as(reachesRightBound: boolean) {
        this.as_rightNavDisabled = reachesRightBound;
    }

    openModal(content) {
        // , size: 'md'
        this.modalService.open(content, { windowClass: 'modal-popup host-details' });
    }

    getPropertyDetails(params: any) {
        this.loading = true;
        this.srvProperty.getPropertyDetails(params).subscribe((res) => {
            this.loading = false;
            if (res.responseCode === '200') {
                this.propertyDetails = res.responseBody;
                console.log(this.propertyDetails);
                this.galleryImages = [];
                let imgObj = {
                    small: this.propertyDetails['coverImageUrl'],
                    medium: this.propertyDetails['coverImageUrl'],
                    big: this.propertyDetails['coverImageUrl'],
                }
                this.galleryImages.push(imgObj)
                for(let i=0; i< this.propertyDetails['propertyVsImages'].length; i++){
                    let imgObj = {
                        small: this.propertyDetails['propertyVsImages'][i].imageURL,
                        medium: this.propertyDetails['propertyVsImages'][i].imageURL,
                        big: this.propertyDetails['propertyVsImages'][i].imageURL,
                    }
                    this.galleryImages.push(imgObj);
                }
                console.log(this.galleryImages)
            }
        }, error => {
            this.loading = false;
            console.log('error', error);
        });
    }

    searchFormSubmitted(searchObj) {
        searchObj['propertyId'] = this.propertyId;
        localStorage.setItem('searchObj', JSON.stringify(searchObj));
        this.sharedSrv.sharedHomeSearchData = searchObj;
        this.getPropertyDetails(searchObj);
        // this.router.navigate(['/properties/property-details'], { queryParams: this.searchObj });
    }

    arrayNum(number) {
        return Array(parseInt(number));
    }

    bookYourStay() {
        this.router.navigate(['/properties/booking'], { queryParams: this.searchObj });
    }
}
