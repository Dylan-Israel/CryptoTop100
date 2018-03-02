export class BitcoinMarket {
    public bitcoin_percentage_of_market_cap: number;
    public active_cryptocurrencies: number;
    public total_volume_usd: number;
    public active_markets: number;
    public total_market_cap_by_available_supply_usd: number;

    constructor(data?: any) {
        const defaults = {
            ...data
        };

        this.bitcoin_percentage_of_market_cap = defaults.bitcoin_percentage_of_market_cap;
        this.active_cryptocurrencies = defaults.active_cryptocurrencies;
        this.total_volume_usd = defaults.total_volume_usd;
        this.active_markets = defaults.active_markets;
        this.total_market_cap_by_available_supply_usd = defaults.total_market_cap_by_available_supply_usd;
    }
}