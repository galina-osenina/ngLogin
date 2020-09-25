import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AdminGuards } from "./admin-page/admin.guards";
import {LoginFormComponent} from "./login-page/components/login-form/login-form.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
