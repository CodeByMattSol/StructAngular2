import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdvertComponent } from './components/new-advert/new-advert.component';
import { EditSettingsComponent } from './components/edit-settings/edit-settings.component';
import { SignPopupComponent } from './components/sign-popup/sign-popup.component'

@NgModule({
  declarations: [
    NewAdvertComponent,
    EditSettingsComponent,
    SignPopupComponent
  ],

  imports: [
    CommonModule
  ],

  bootstrap: [NewAdvertComponent]
})

export class UserModule { }
