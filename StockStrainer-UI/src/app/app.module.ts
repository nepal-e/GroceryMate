import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { AppComponent } from "./app.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { GroceryComponent } from "./groceries/grocery/grocery.component";
import { GroceryListComponent } from "./groceries/groceryList/grocery-list.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    HttpClientModule,
    NativeScriptUISideDrawerModule,
    NativeScriptFormsModule,
  ],
  declarations: [AppComponent, GroceryComponent, GroceryListComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
