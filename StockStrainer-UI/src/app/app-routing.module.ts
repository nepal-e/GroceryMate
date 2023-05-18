import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/(eventsTab:events/default//watchlistTab:watchlist/default)',
    pathMatch: 'full',
  },

  {
    path: 'events',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/events/events.module').then((m) => m.EventsModule),
    outlet: 'eventsTab',
  },
  {
    path: 'watchlist',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/WatchList/watchlist.module').then((m) => m.WatchListModule),
    outlet: 'watchlistTab',
  },

]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
