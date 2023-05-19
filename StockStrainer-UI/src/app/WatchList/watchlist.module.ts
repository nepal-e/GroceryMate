import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import {WatchListRoutingModule} from './watchlist-routing.module'
import { WatchListComponent } from './watchlist.component'
import { GraphComponent } from './Graph/graph.component'

@NgModule({
  imports: [NativeScriptCommonModule, WatchListRoutingModule],
  declarations: [WatchListComponent,GraphComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class WatchListModule {}
