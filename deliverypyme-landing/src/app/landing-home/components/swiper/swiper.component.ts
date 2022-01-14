import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      680: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
    centeredSlides: true,
    effect: 'coverflow',
    autoplay: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
