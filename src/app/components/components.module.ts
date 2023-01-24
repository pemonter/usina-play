import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CarouselContentsComponent } from './carousel-contents/carousel-contents.component';
import { CarouselPersonalComponent } from './carousel-personal/carousel-personal.component';
import { CarouselProgramsComponent } from './carousel-programs/carousel-programs.component';
import { HeaderComponent } from './header/header.component';
import { RoundedIconComponent } from './rounded-icon/rounded-icon.component';

@NgModule({
  declarations: [
    CarouselContentsComponent,
    CarouselPersonalComponent,
    CarouselProgramsComponent,
    HeaderComponent,
    RoundedIconComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    SwiperModule
  ],
  exports: [
    CarouselContentsComponent,
    CarouselPersonalComponent,
    CarouselProgramsComponent,
    HeaderComponent,
    RoundedIconComponent
  ],
})
export class ComponentsModule { }
