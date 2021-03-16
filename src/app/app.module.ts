import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddressComponent } from './address/address.component';


// import { AppModule } from './customer-dashboard/customer-dashboard.module';
import { AppShellModule } from './app-shell/app-shell.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddressComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppShellModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
