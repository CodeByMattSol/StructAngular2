import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardAdvertComponent } from './components/card-advert/card-advert.component';
import { SearchAdvertsComponent } from './components/search-adverts/search-adverts.component';
import { AdvertContentComponent } from './components/advert-content/advert-content.component';
import { SignPopupComponent } from './components/sign-popup/sign-popup.component';

const routes: Routes = [
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardAdvertComponent,
    SearchAdvertsComponent,
    AdvertContentComponent,
    SignPopupComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
