import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminGuards } from "./admin/admin.guards";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from "./login/login.module";
import { StoreModule } from "@ngrx/store";
import { UserReducer } from "./reducers/user.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: UserReducer
    }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [AdminGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
