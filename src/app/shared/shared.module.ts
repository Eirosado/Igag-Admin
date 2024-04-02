import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { AddUpdateProductComponent } from './components/add-update-product/add-update-product.component';



@NgModule({
  declarations: [
    AddUpdateProductComponent,
    AuthHeaderComponent,
    BackButtonComponent,
    CustomInputComponent,
    HeaderComponent,
    LogoComponent

  ],
  exports: [
    AddUpdateProductComponent,
    AuthHeaderComponent,
    BackButtonComponent,
    CustomInputComponent,
    HeaderComponent,
    LogoComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
