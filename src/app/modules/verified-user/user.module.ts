import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdvertComponent } from './components/new-advert/new-advert.component';
import { EditSettingsComponent } from './components/edit-settings/edit-settings.component';


@NgModule({
  declarations: [
    NewAdvertComponent,
    EditSettingsComponent
  ],
  imports: [
    CommonModule
  ]
})

export class UserModule { }
