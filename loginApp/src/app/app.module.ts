import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminGuards } from "./admin/admin.guards";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [AdminGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
