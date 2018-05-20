import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CryptoService } from '../services/crypto.service';
import { BitcoinPrice, PriceCoordinates } from '../models';

@Component({
    selector: 'bitcoin-stats',
    templateUrl: './bitcoin-stats.component.html',
    styleUrls: ['./bitcoin-stats.component.css']
})
export class BitcoinStatsComponent implements OnInit, OnDestroy {
public bitcoinStats: BitcoinPrice = new BitcoinPrice();
public bitcoinPriceStatsSub: Subscription;
public prices: number[];
public dates: string[];
public options: any;
public chartData: any;

    constructor(public cryptoService: CryptoService) {}

    public ngOnInit(): void {
      this.bitcoinPriceStatsSub = this.cryptoService.getBitCoinPriceStats().subscribe((data: BitcoinPrice) => {
            this.bitcoinStats = data;
            this.prices = this.convertPrices();
            this.dates = this.convertDates();

            this.chartData = {
              labels: [...this.dates],
              datasets: [
                {
                  label: `Bitcoin (${this.bitcoinStats.unit})`,
                  data: [...this.prices],
                  backgroundColor: 'rgba(0,0,0, .5)',
                  borderColor: '#6699f6'
                }
              ]
            };

            this.options = {
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                scales: {
                    xAxes: [{
                      gridLines: {
                        color: "rgba(255, 255, 255, 0.3)"
                      }
                    }],
                    yAxes: [{
                      gridLines: {
                        color: "rgba(255, 255, 255, 0.3)",
                      },
                    }]
                  },
              responsive: true,
              maintainAspectRatio: false
            };
        });
    }

    public ngOnDestroy(): void {
        this.bitcoinPriceStatsSub.unsubscribe();
    }

    public convertDates(): string[] {
        const dates = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
            const rawDate = new Date(coordinates.x * 1000);

            return `${rawDate.getMonth()}/${rawDate.getDay()}/${rawDate.getFullYear()}`;
        });

        return dates;
    }

    public convertPrices(): number[] {
        const prices = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
            return Number((coordinates.y).toFixed(2));
        });
    
        return prices;
    }
}