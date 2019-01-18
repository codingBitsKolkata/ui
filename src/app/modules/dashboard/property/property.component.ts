import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import * as Highcharts from 'highcharts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../services/apis/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit, AfterViewInit {

  languageList = [];
  LanguageSelectedItems = [];
  interestList = [];
  interestSelectedItems = [];
  dropdownSettings = {};
  propertyList = [];
  // Chart Config
  Highcharts = Highcharts;

// total days
  totaldays;

  revenueLineChart = {
    chart: {
      type: 'line',
      backgroundColor: '#f5f6fa'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    plotOptions: {
      line: {
      }
    },
    series: [{
      name: 'Property - ORA9122522',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'Property - ORA9122966',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }, {
      name: 'Property - ORA9122865',
      data: [4.9, 5.2, 6.7, 7.5, 10.9, 14.2, 15.0, 15.6, 13.2, 10.3, 5.6, 3.8]
    }, {
      name: 'Property - ORA9122108',
      data: [6.9, 3.2, 6.7, 7.9, 8.6, 9.5, 13, 15, 16, 13, 10, 8]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  revenueBarChart = {
    chart: {
      type: 'column',
      backgroundColor: '#f5f6fa',
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: ['ORA9122522', 'ORA9122865', 'ORA9122966', 'ORA9122108']
    },
    credits: {
        enabled: false
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    series: [{
        name: 'Pending amount',
        data: [28000, 15000, 30000, 68000]
    }, {
        name: 'Realized amount ',
        data: [50000, 7000, 40000, 94000]
    }]
  };

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 3, sm: 3, md: 3, lg: 3, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  };
  

  constructor(
    private modalService: NgbModal,
    private srvProperty: PropertyService,
    private cdr: ChangeDetectorRef
  ) {
    this.populatePropertyList();
   }

  openModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup' });
  }

  openBookingModal(content) {
    // , size: 'md'
    this.modalService.open(content, { windowClass: 'modal-popup booking-modal' });
  }
  openAddPropertyModal(content) {
    this.modalService.open(content, { windowClass: 'modal-popup add-property-modal', centered: true});
  }

  ngOnInit() {
    this.totaldays = 31;
    this.languageList = [
      { item_id: 1, item_text: 'English' },
      { item_id: 2, item_text: 'Hindi' },
      { item_id: 3, item_text: 'Bengali' },
      { item_id: 4, item_text: 'Panjabi' },
      { item_id: 5, item_text: 'Telegu' },
      { item_id: 6, item_text: 'Tamil' },
      { item_id: 7, item_text: 'Urdhu' },
      { item_id: 8, item_text: 'Malayalam' }
    ];
    this.LanguageSelectedItems = [
      { item_id: 1, item_text: 'English' },
      { item_id: 2, item_text: 'Hindi' }
    ];

    this.interestList = [
      { item_id: 1, item_text: 'Travelling' },
      { item_id: 2, item_text: 'Playing guiter' },
      { item_id: 3, item_text: 'Listening musics' },
      { item_id: 4, item_text: 'Gurdaning' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  populatePropertyList() {
    this.srvProperty.getHostPropertyList().subscribe((res) => {
     console.log('Property List =>', res);
     if (res.responseCode === '200') {
        this.propertyList = res.responseBody;
     }
   }, error => {
     console.log('error', error);
   });
  }

  // 
  daysArray(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

}
