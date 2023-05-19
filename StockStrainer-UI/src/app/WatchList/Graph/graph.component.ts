import { Component, OnInit ,Input} from "@angular/core";
 import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StockData } from "../../Models/StockData"
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import {LineSeries, CategoricalAxis, LinearAxis, RadCartesianChart } from "nativescript-ui-chart";
 @Component({
  selector: "stockstrainer-graph",
 templateUrl: "./graph.component.html",
 styleUrls: ["./graph.component.css"],
 moduleId:module.id
})
 export class GraphComponent implements OnInit {
  @Input() ticker: string;
  @Input() name: string;
 stockData: StockData
  constructor(private http: HttpClient,
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions) {}

      ngOnInit() {
        this.fetchData();
  }

  fetchData() {
    console.log(this.ticker)

    const url =
      "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-05-17/2023-05-18";
    const token = "JjDuspII3HcDkmFPQUxLVyt9DbKVXxGH";
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get<StockData>(url, { headers })
      .subscribe((response) => (this.stockData = response));
  }
    onBackTap(): void {
      this._routerExtensions.back()
    }
}



