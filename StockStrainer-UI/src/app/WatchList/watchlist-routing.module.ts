import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
// import {GraphComponent} from '../WatchList/Graph/graph.component'

import { WatchListComponent } from './watchlist.component'

const routes: Routes = [{ path: 'default', component: WatchListComponent },
// { path: 'graph', component: GraphComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class WatchListRoutingModule {}
