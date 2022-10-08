import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    GoogleMapsModule
  ],
  providers: [GoogleMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
