import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObservableArray } from '@nativescript/core/data/observable-array';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
@Component({
  selector: 'stockstrainer-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  name: string = 'Microsoft';
  symbol: string = 'MSFT';
  stockPrices: ObservableArray<{ category: any; value: any; }>;
  resolvedStockPrices: any[];

  constructor(
    private http: HttpClient,
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions
  ) {}

  get categoricalSource(): ObservableArray<{ category: any; value: any; }> {
    return this.stockPrices;
  }

  fetchStockPrices(symbol: string): Promise<any[]> {
    const apiUrl = `https://api.iex.cloud/v1/data/CORE/INTRADAY_PRICES/${symbol}?token=pk_bb0433cbc9504d5d9d69e05526b09794`;

    return this.http
      .get<any[]>(apiUrl)
      .toPromise()
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return []; // Return an empty array in case of an error
      });
  }

  ngOnInit() {
    this._route.queryParams.subscribe((params) => {
      this.name = params['name'];
      this.symbol = params['symbol'];
    });
    console.log('Graph component loaded with symbol=', this.symbol, this.name);
    this.fetchStockPrices(this.symbol).then((data) => {
      const stockData = data.map((price) => ({
        category: price.minute,
        value: price.close
      }));
      this.stockPrices = new ObservableArray(stockData);
      console.log("stockPrices: ", this.stockPrices);
    });
  }

  onBackTap(): void {
    this._routerExtensions.back();
  }
}
