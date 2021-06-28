import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoansComponent } from './components/loans/loans.component';
import { OffersComponent } from './components/offers/offers.component';

import { routingModule } from './app.routing';

import { OffersService } from './services/offers.service';
import { DownloadComponent } from './components/download/download.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    CardsComponent,
    LoansComponent,
    OffersComponent,
    DownloadComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [
    OffersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
