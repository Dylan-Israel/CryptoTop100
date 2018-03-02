import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoCurrency } from '../models/crypto-currency.class';

@Component({
    selector: 'crypto-table',
    templateUrl: './crypto-table.component.html',
    styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent {
    public top100Cryptos: CryptoCurrency[];
    public sortValues: any = { rank: false, marketCap: true, volume: false, change24: false, price: false, name: false };

    constructor(public cryptoService: CryptoService) {
        this.getTop100Cryptos();
    }

    public getTop100Cryptos(): void {
        this.cryptoService.getAllCryptos().subscribe((data: any) => {
            this.top100Cryptos = data.map((element: any) => {
                return new CryptoCurrency(element);
            });
        });
    }

    public sortString(sortValue: boolean): void {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        } else {
            this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA > nameB) {
                    return -1;
                } else if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
        }
    }

    public sortNumeric(sortValue: boolean, key: string) {
        if (sortValue) {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                return a[key] - b[key];
            });
        } else {
            this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
                return b[key] - a[key];
            });
        }
    }

}