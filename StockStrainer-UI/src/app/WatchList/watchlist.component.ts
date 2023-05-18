import { Component, OnInit } from "@angular/core";

@Component({
    selector: "stockstrainer-watchlist",
    templateUrl: "./watchlist.component.html",
    styleUrls: ["./watchlist.component.css"],
    moduleId:module.id
})
export class WatchListComponent implements OnInit {
    events: string[]; // Replace with your event data model

    constructor() {}

    ngOnInit() {
        // Fetch events data from API or set it programmatically
        this.events = ["Event 1", "Event 2", "Event 3"]; // Replace with your event data
        console.log("Events Component is loaded")
    }
}
