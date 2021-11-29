import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent, HomeComponent } from './pages/page';
import {
  CardContentComponent,
  CardPagckageComponent,
  SwiperTopPageComponent,
  MultiImgSwiperComponent,
  TablePackageComponent,
} from './shared/shares';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { SwiperModule } from 'ngx-swiper-wrapper';
// import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AisShopUserService } from './services/ais-shop-user.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'horizontal',
//   slidesPerView: 'auto',
// };
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainpageComponent,
    HomeComponent,
    CardPagckageComponent,
    CardContentComponent,
    TablePackageComponent,
    SwiperTopPageComponent,
    MultiImgSwiperComponent,
    SafePipe,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    // SlickCarouselModule,
    // SwiperModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG,
    // },
    AisShopUserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
