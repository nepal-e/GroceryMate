import { Component, OnInit } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { CompanyInfo,Ticker} from "../Models/StockData";
import { SearchBar } from "@nativescript/core";

@Component({
    selector: "stockstrainer-watchlist",
    templateUrl: "./watchlist.component.html",
    styleUrls: ["./watchlist.component.css"],
    moduleId:module.id
})
export class WatchListComponent implements OnInit {
  stocks: CompanyInfo[]=[];
  searchString:string;

    constructor(private http: HttpClient) {}

    ngOnInit() {
      console.log('Watchlist Component is loaded');
      this.fetchData();
    }

    onSubmit(args) {
      const searchBar = args.object as SearchBar;
      console.log(`Searching for ${searchBar.text}`);
      this.onSearch(searchBar.text);
  }

  onTextChanged(args) {
      const searchBar = args.object as SearchBar;
      console.log(`Input changed! New value: ${searchBar.text}`);
  }

  onClear(args) {
      const searchBar = args.object as SearchBar;
      console.log(`Clear event raised`);
      this.onSearch(null);
  }

    fetchData() {
      console.log('Fetching Data...');
      const url =
        'https://api.iex.cloud/v1/data/CORE/REF_DATA?token=pk_bb0433cbc9504d5d9d69e05526b09794';
      const token = 'pk_bb0433cbc9504d5d9d69e05526b09794';
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      this.http.get<CompanyInfo[]>(url, { headers }).subscribe(
        (response) => {
          this.stocks = response;
          console.log('Response 2: ', this.stocks);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }

    addToWatchlist(stock: CompanyInfo) {
      // Add your logic to add the stock to the user's watchlist
      console.log("Adding stock to watchlist:", stock);
    }

    openGraphComponent(){

    }

    onSearch(searchText: string) {
      // Filter the stocks based on the search text
      console.log(searchText)
      if (searchText) {
        this.stocks = this.stocks.filter(stock => {
          // Customize the filtering logic according to your requirements
          return (
            stock.symbol.toLowerCase().includes(searchText.toLowerCase()) ||
            stock.name.toLowerCase().includes(searchText.toLowerCase()) ||
            stock.exchangeName.toLowerCase().includes(searchText.toLowerCase())
          );
        });
      } else {
        // Reset the stocks array when the search text is empty
        this.fetchData(); // You can replace this with your logic to reload the original stocks
      }
    }
}
