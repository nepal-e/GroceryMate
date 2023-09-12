import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ns-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.css"],
  moduleId: module.id,
})
export class GroceryListComponent implements OnInit {
  @Input() groceries: string[] = [];
  constructor() {}

  ngOnInit() {
    console.log(this.groceries); // Add this line for debugging
  }
}
