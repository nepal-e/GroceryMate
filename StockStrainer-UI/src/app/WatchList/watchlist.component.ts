import { Component, OnInit } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { StockData ,Stock,Ticker} from "../Models/StockData";

@Component({
    selector: "stockstrainer-watchlist",
    templateUrl: "./watchlist.component.html",
    styleUrls: ["./watchlist.component.css"],
    moduleId:module.id
})
export class WatchListComponent implements OnInit {
  stocks: Stock;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        console.log("watchlist Component is loaded")
        this.fetchData()
    }

    fetchData() {
      console.log('Fetching Data...')
      const url =
        "https://api.polygon.io/v3/reference/tickers?active=true";
      const token = "JjDuspII3HcDkmFPQUxLVyt9DbKVXxGH";
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      this.http.get<Stock>(url, { headers }).subscribe((response) => {
        this.stocks = response;
        console.log("Response 2: ",this.stocks)
      });

    }

    openGraphComponent(){

    }
}
