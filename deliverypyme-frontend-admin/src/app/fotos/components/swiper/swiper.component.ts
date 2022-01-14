import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';
import { ConfirmarComponent } from "src/app/shared/modal/confirmar/confirmar.component";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
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
    autoplay: false,
  };

  @Input() comment: boolean = true

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openRemoveDialog() {
    this.dialog
      .open(ConfirmarComponent, { data: { title: "¿ESTÁS SEGURO?", description: "" } })
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          console.log(confirm)
        }
      });
  }

}
