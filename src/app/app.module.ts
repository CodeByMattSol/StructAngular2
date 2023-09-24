import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardAdvertComponent } from './components/card-advert/card-advert.component';
import { SearchAdvertsComponent } from './components/search-adverts/search-adverts.component';
import { AdvertContentComponent } from './components/advert-content/advert-content.component';
import { SignPopupComponent } from './components/sign-popup/sign-popup.component'

import { GetAdvertsService } from './services/get-adverts.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardAdvertComponent,
    SearchAdvertsComponent,
    AdvertContentComponent,
    SignPopupComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [GetAdvertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
