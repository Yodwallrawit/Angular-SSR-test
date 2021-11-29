import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper-top-page',
  templateUrl: './swiper-top-page.component.html',
  styleUrls: ['./swiper-top-page.component.scss']
})
export class SwiperTopPageComponent implements OnInit {

  @Input() swiperImg:any = [] 
  public previewSwiper :any = []
  constructor() { 
    
  }
  
  ngOnInit(){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.swiperImg) {
       this.swiperImg = changes.swiperImg?.currentValue;
       console.log('swiperImg',this.swiperImg);
    }
 }

  public config: SwiperConfigInterface = {

    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    loop: true,
    roundLengths: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {}

  }

}
