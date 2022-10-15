import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormGroupEjemploComponent } from './form-group-ejemplo/form-group-ejemplo.component';

import {GoogleMapsModule} from  "@angular/google-maps"


@NgModule({
  declarations: [
    AppComponent,
    FormGroupEjemploComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
