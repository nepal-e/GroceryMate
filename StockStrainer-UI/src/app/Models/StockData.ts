export class StockData {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: StockResult[];
  status: string;
  request_id: string;
  count: number;
}

export class StockResult {
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;
}

export class Stock {
  results:Ticker[];
}
export class Ticker{
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange?: string;
  type: string;
  active: boolean;
  currency_name: string;
  cik?: string;
  composite_figi?: string;
  share_class_figi?: string;
  last_updated_utc: string;
}


