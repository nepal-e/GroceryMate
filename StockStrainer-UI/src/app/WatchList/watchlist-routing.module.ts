import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { WatchListComponent } from './watchlist.component'

const routes: Routes = [{ path: 'default', component: WatchListComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class WatchListRoutingModule {}
