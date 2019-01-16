import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 2,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  }
  carouselItems = [{
    img: 'award-1.png',
    text: 'Awarded the most promising Startup in 2018 for Excellence in Innovation and AI Enabled Application and Website. Assocham Seed Investors, East India’s Premier Real Estate Company presented the award in the Cybercon 2018 Technology Excellence Award Ceremony.'
  },{
    img: 'award-2.png',
    text: 'Recognized among the top 3000 startups of 2018 by the Indian Institute of Management Calcutta (IIMC).'
  }
];
  
  constructor(private cdr: ChangeDetectorRef) {
    // customize default values of dropdowns used by this component tree
    // config.placement = 'top-left';
    // config.autoClose = false;
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  // scrollToDiv(el) {
  //   el.scrollIntoView({behavior: 'smooth'});
  //   // window.scrollTo(el.yPosition)
  // }
}
