import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'carousel-programs',
  templateUrl: './carousel-programs.component.html',
  styleUrls: ['./carousel-programs.component.scss'],
})
export class CarouselProgramsComponent {

  @ViewChild('swiper') swiper: SwiperComponent;

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
}
