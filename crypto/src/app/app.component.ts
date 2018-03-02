import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BitcoinMarket } from '../models/bitcoin-market.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bitcoinMarketCap: BitcoinMarket = new BitcoinMarket();

  constructor(public cryptoService: CryptoService) {
    this.getBitcoinStats();
  }

  public getBitcoinStats(): void {
    this.cryptoService.getBitcoinmarketCap().subscribe((data: any) => {
      this.bitcoinMarketCap = new BitcoinMarket(data);
      console.log(this.bitcoinMarketCap);
    });
  }
}
