import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingHomeRoutingModule } from './landing-home-routing.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { IndexComponent } from './layouts/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepComponent } from './components/steps/step/step.component';
import { CircleComponent } from './components/steps/step/circle/circle.component';
import { ImageComponent } from './components/steps/step/image/image.component';
import { DescriptionComponent } from './components/steps/step/description/description.component';
import { InfoComponent } from './components/steps/step/info/info.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { SectionComponent } from './components/section/section.component';
import { TitleComponent } from './components/section/title/title.component'
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { SliderTextComponent } from './components/slider-text/slider-text.component';
import { TitleComponent as TitleCardComponent } from './components/card/title/title.component';
import { DescriptionComponent as DescriptionSectionComponent } from './components/section/description/description.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { SocialesComponent } from './components/sociales/sociales.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonPrimaryComponent,
    StepsComponent,
    StepComponent,
    CircleComponent,
    ImageComponent,
    DescriptionComponent,
    InfoComponent,
    SeparatorComponent,
    SectionComponent,
    TitleComponent,
    NavComponent,
    BannerComponent,
    SliderTextComponent,
    TitleCardComponent,
    DescriptionSectionComponent,
    InfoCardComponent,
    SwiperComponent,
    WhatsappComponent,
    SocialesComponent,
    ScrollComponent,
    PreciosComponent
  ],
  imports: [
    CommonModule,
    LandingHomeRoutingModule,
    NgxUsefulSwiperModule,
  ],
  exports: [
    CardComponent,
    ButtonPrimaryComponent
  ]
})
export class LandingHomeModule { }
