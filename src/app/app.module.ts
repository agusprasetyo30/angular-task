import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Tugas3Component } from './tugas3/tugas3.component';
import { Tugas3LainComponent } from './tugas3-lain/tugas3-lain.component';

@NgModule({
  declarations: [
    AppComponent,
    Tugas3Component,
    Tugas3LainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
