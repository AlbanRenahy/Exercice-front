import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfirmieresComponent } from './components/infirmieres/infirmieres.component';
import { PatientsComponent } from './components/patients/patients.component';
import { NavComponent } from './components/nav/nav.component';
import { PatientsCardComponent } from './components/patients/patients-card/patients-card.component';
import { InfirmieresCardComponent } from './components/infirmieres/infirmieres-card/infirmieres-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InfirmieresComponent,
    PatientsComponent,
    NavComponent,
    PatientsCardComponent,
    InfirmieresCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
