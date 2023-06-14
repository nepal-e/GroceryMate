
export class CompanyInfo {
  symbol: string;
  exchange: string;
  exchangeSuffix: string;
  exchangeName: string;
  exchangeSegment: string;
  exchangeSegmentName: string;
  name: string;
  type: string;
  iexId: string;
  region: string;
  currency: string;
  isEnabled: boolean;
  figi: string;
  cik: string;
  lei: string;
}

export class Stock {
  results:Ticker[];
}
export class Ticker {
  date: string;
  minute: string;
  label: string;
  high: number;
  low: number;
  open: number;
  close: number;
  average: number;
  volume: number;
  notional: number;
  numberOfTrades: number;
}




