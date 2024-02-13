import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FlightInfoPageComponent } from './flight-info-page/flight-info-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FlightInfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA1BcjoiZBYG-kXyW8YxXQHNw36Wqx0uJs",
      authDomain: "flightinfochallenge.firebaseapp.com",
      projectId: "flightinfochallenge",
      storageBucket: "flightinfochallenge.appspot.com",
      messagingSenderId: "45513776829",
      appId: "1:45513776829:web:00f7b65edf376d1696e1d4"
  }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
