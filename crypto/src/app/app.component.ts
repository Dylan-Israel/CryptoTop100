import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { BitcoinMarket } from '../models';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public bitcoinMarketCap: BitcoinMarket = new BitcoinMarket();
  public bitcoinStatsSub: Subscription;

  constructor(public cryptoService: CryptoService) {}

  public ngOnInit(): void {
    this.getBitcoinStats();
  }

  public ngOnDestroy(): void {
    this.bitcoinStatsSub.unsubscribe();
  }

  public getBitcoinStats(): void {
    this.bitcoinStatsSub = this.cryptoService.getBitcoinmarketCap().subscribe((data: BitcoinMarket) => {
      this.bitcoinMarketCap = data;
    });
  }
}
