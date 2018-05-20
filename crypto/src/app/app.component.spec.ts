import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BitcoinMarket } from '../models';
import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [ CryptoService ],
      imports: [ HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    // assert
    expect(app).toBeTruthy();
  }));

  it('instance of BitcoinMarket', async(() => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    // assert
    expect(app.bitcoinMarketCap instanceof BitcoinMarket).toBe(true);
  }));

});
