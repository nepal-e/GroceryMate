import { Component, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";

@Component({
    selector: "stockstrainer-events",
    templateUrl: "./events.component.html",
    styleUrls: ["./events.component.css"],
    moduleId:module.id
})
export class EventsComponent implements OnInit {
    events: string[]; // Replace with your event data model

    constructor() {}

    ngOnInit() {
        // Fetch events data from API or set it programmatically
        this.events = ["Event 1", "Event 2", "Event 3"]; // Replace with your event data
    }
}
