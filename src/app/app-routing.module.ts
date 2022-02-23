import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {AuthComponent} from "./components/auth/auth.component";
import {RequestModule} from "./modules/request/request.module";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {
    path: 'requests',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/request/request.module').then(m => m.RequestModule),
    outlet: 'tab'
  },
  {
    path: 'map',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/map/map.module').then(m => m.MapModule),
    outlet: 'tab'
  },
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
