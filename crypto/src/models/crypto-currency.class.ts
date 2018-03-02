export class CryptoCurrency {
    public id: string;
    public name: string;
    public symbol: string;
    public rank: number;
    public price_usd: number;
    public price_btc: number;
    public market_cap_usd: number;
    public available_supply: number;
    public total_supply: number;
    public max_supply: number;
    public percent_change_1h: number;
    public percent_change_24h: number;
    public percent_change_7d: number;
    public last_updated: Date;

    constructor(data?: any) {
        const defaults: any = {
            ...data
        };

        this.id = defaults.id;
        this.name = defaults.name;
        this.symbol = defaults.symbol;
        this.rank = Number(defaults.rank);
        this.price_usd = Number(defaults.price_usd);
        this.price_btc = Number(defaults.price_btc);
        this.market_cap_usd = Number(defaults.market_cap_usd);
        this.available_supply = Number(defaults.available_supply);
        this.total_supply = Number(defaults.total_supply);
        this.max_supply = Number(defaults.max_supply);
        this.percent_change_1h = Number(defaults.max_supply);
        this.percent_change_24h = Number(defaults.percent_change_24h);
        this.percent_change_7d = Number(defaults.percent_change_7d);
        this.last_updated = new Date(Number(defaults.last_updated));
    }
}