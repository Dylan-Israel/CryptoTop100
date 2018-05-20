import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CryptoCurrency } from '../models';

@Component({
    selector: 'crypto-filter',
    templateUrl: './crypto-filter.component.html',
    styleUrls: ['./crypto-filter.component.css']
})
export class CryptoFilterComponent {
    @Input() public cryptos: CryptoCurrency[];
    @Output() public filteredCryptosEvent = new EventEmitter<CryptoCurrency[]>();
    @Output() public priceUnitEvent = new EventEmitter<string>();
    public filteredCryptos: CryptoCurrency[] = [];
    public percentChange: string = 'All';
    public showAmount: number = 100;
    public priceUnit: string = 'USD';

    public filterCryptos(): void {
        this.percentChangeFilter();
        this.showOnlyFilter();
    }

    public filterEvent(): void {
        this.filteredCryptosEvent.emit(this.filteredCryptos);
    }

    public priceEvent(): void {
        this.priceUnitEvent.emit(this.priceUnit);
    }

    public percentChangeFilter(): void {
        this.filteredCryptos = this.cryptos.filter((crypto: CryptoCurrency) => {
            if (this.percentChange === 'Positive') {
                return crypto.percent_change_24h >= 0;
            } else if (this.percentChange === 'Negative') {
                return crypto.percent_change_24h < 0;
            }
            return crypto;
        });
    }

    public showOnlyFilter(): void {
        this.filteredCryptos = this.filteredCryptos.slice(0, this.showAmount);
        this.filterEvent();
        this.priceEvent();
    }

}