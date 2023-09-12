import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "ns-grocery",
  templateUrl: "./grocery.component.html",
  styleUrls: ["./grocery.component.css"],
  moduleId: module.id,
})
export class GroceryComponent implements OnInit {
  @Output() input = new EventEmitter<string>();
  groceryDis: string = "";
  constructor() {}

  ngOnInit() {}
  onSetGrocery() {
    this.input.emit(this.groceryDis);
  }
}
