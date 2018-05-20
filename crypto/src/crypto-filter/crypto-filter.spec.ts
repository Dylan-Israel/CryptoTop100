import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { async, TestBed } from "@angular/core/testing";

import { CryptoCurrency } from "../models";
import { CryptoService } from "../services/crypto.service";
import { CryptoFilterComponent } from "./crypto-filter.component";

describe('CryptoFilterComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CryptoFilterComponent
            ],
            providers: [
                CryptoService
            ],
            imports: [
                HttpClientModule
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(CryptoFilterComponent);
        const app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    it('Default Properties', async(() => {
        // arrange
        const fixture = TestBed.createComponent(CryptoFilterComponent);
        const app = fixture.debugElement.componentInstance;

        // assert
        expect(app.filterCryptos.length).toBe(0);
        expect(typeof app.filteredCryptos).toBe('object');
        expect(Array.isArray(app.filteredCryptos)).toBe(true);
        expect(app.percentChange).toBe('All');
        expect(app.showAmount).toBe(100);
        expect(app.priceUnit).toBe('USD');
    }));

    it('Limit total cryptos', async(() => {
        // arrange
        const fixture = TestBed.createComponent(CryptoFilterComponent);
        const app = fixture.debugElement.componentInstance;
        app.filteredCryptos = Array(100).fill(new CryptoCurrency());
        app.showAmount = 25;

        // act
        app.showOnlyFilter();

        // assert
        expect(typeof app.filteredCryptos).toBe('object');
        expect(Array.isArray(app.filteredCryptos)).toBe(true);
        expect(app.filteredCryptos.length).toBe(25);
    }));

    it('Returns all cryptos', async(() => {
        // arrange 
        const fixture = TestBed.createComponent(CryptoFilterComponent);
        const app = fixture.debugElement.componentInstance;
        app.cryptos = Array(100).fill(new CryptoCurrency());

        // act 
        app.percentChangeFilter();

        // assert
        expect(app.filteredCryptos[0] instanceof CryptoCurrency);
        expect(app.filteredCryptos.length).toBe(100);
    }));


    it('Returns positive 24h growth cryptos', async(() => {
        // arrange 
        const fixture = TestBed.createComponent(CryptoFilterComponent);
        const app = fixture.debugElement.componentInstance;
        app.cryptos = [
            new CryptoCurrency({ percent_change_24h: -1 }),
            new CryptoCurrency({ percent_change_24h: 5 }),
            new CryptoCurrency({ percent_change_24h: 6 })
        ];
        app.percentChange = 'Positive';

        // act
        app.percentChangeFilter();

        // assert
        expect(app.filteredCryptos[0] instanceof CryptoCurrency);
        expect(app.filteredCryptos.length).toBe(2);
    }));

    it('Returns negative 24h growth cryptos', async(() => {
        // arrange 
        const fixture = TestBed.createComponent(CryptoFilterComponent);
        const app = fixture.debugElement.componentInstance;
        app.cryptos = [
            new CryptoCurrency({ percent_change_24h: -1 }),
            new CryptoCurrency({ percent_change_24h: 5 }),
            new CryptoCurrency({ percent_change_24h: 6 })
        ];
        app.percentChange = 'Negative';

        // act
        app.percentChangeFilter();

        // assert
        expect(app.filteredCryptos[0] instanceof CryptoCurrency);
        expect(app.filteredCryptos.length).toBe(1);
    }));
});