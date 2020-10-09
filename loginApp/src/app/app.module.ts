import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminGuards } from "./admin/admin.guards";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from "./login/login.module";
import { StoreModule } from "@ngrx/store";
import { UserReducer } from "./shared/reducers/user.reducer";
import { CompanyReducer } from "./company/reducers/company.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./user/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CompanyEffects } from "./company/company.effect";
import { ModalReducer } from "./UI/reducers/modal.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: UserReducer,
      company: CompanyReducer,
      ui: ModalReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      UserEffects,
      CompanyEffects
    ]),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    StoreDevtoolsModule
  ],
  providers: [AdminGuards],
  bootstrap: [AppComponent]
})
export class AppModule { }
