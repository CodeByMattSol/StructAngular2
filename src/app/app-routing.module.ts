import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchAdvertsComponent } from './components/search-adverts/search-adverts.component';
import { CardAdvertComponent } from './components/card-advert/card-advert.component';

const routes: Routes = [
    { path: '', component: CardAdvertComponent},
    { path: 'search', component: SearchAdvertsComponent},
    // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
