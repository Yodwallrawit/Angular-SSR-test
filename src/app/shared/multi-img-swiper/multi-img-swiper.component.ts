import { Component, OnInit } from '@angular/core';
// import { SwiperComponent, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-multi-img-swiper',
  templateUrl: './multi-img-swiper.component.html',
  styleUrls: ['./multi-img-swiper.component.scss'],
})
export class MultiImgSwiperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  slides = [
    { img: 'assets/img/product.png' },
    { img: 'assets/img/product.png' },
    { img: 'assets/img/product.png' },
    { img: 'assets/img/product.png' },
    { img: 'assets/img/product.png' },
  ];

  // public config2: SwiperConfigInterface = {
  //   direction: 'horizontal',
  //   slidesPerView: 4,
  //   spaceBetween: 0,
  //   keyboard: false,
  //   mousewheel: false,
  //   scrollbar: false,
  //   loop: true,
  //   roundLengths: true,

  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     type: 'bullets',
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 30,
  //     },
  //     479: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //     767: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     899: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 10,
  //     },
  //     1200: {
  //       slidesPerView: 4,
  //       spaceBetween: 20,
  //     }
  //   }
  // };
}
