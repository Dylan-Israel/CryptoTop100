import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CryptoTableComponent } from '../crypto-table/crypto-table.component';
import { BitcoinStatsComponent } from '../bitcoin-stats/bitcoin-stats.component';
import { CryptoFilterComponent } from '../crypto-filter/crypto-filter.component';

const appRoutes: Routes = [
  { path: '', component: CryptoTableComponent },
  { path: 'bitcoinStats', component: BitcoinStatsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    CryptoFilterComponent,
    NotFoundComponent,
    BitcoinStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
