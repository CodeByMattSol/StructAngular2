import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchAdvertsComponent } from './components/search-adverts/search-adverts.component';
import { CardAdvertComponent } from './components/card-advert/card-advert.component';
import { AdvertContentComponent } from './components/advert-content/advert-content.component';

const routes: Routes = [
    { path: '', component: CardAdvertComponent},
    { path: 'search', component: SearchAdvertsComponent},
    { path: 'advert/:id', component: AdvertContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
