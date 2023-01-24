import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'carousel-personal',
  templateUrl: './carousel-personal.component.html',
  styleUrls: ['./carousel-personal.component.scss'],
})
export class CarouselPersonalComponent {

  @ViewChild('swiper') swiper: SwiperComponent;

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}
