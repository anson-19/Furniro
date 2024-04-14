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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SliderimageComponent,
    ProductGridListComponent,
    FooterComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
