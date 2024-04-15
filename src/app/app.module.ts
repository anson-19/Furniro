import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HeaderComponent } from './component/header/header.component';
import { SliderimageComponent } from './modules/sliderimage/sliderimage.component';
import { ProductGridListComponent } from './modules/product-grid-list/product-grid-list.component';
import { FooterComponent } from './component/footer/footer.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ShopComponent } from './component/shop/shop.component';
import { CartComponent } from './component/cart/cart.component';
import { TitleComponent } from './modules/title/title.component';
import { QualityCardComponent } from './modules/quality-card/quality-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SliderimageComponent,
    ProductGridListComponent,
    FooterComponent,
    GalleryComponent,
    ShopComponent,
    CartComponent,
    TitleComponent,
    QualityCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
