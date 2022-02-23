import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestFormComponent} from "./components/request-form/request-form.component";

const routes: Routes = [
  {path: 'list', component: RequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule {
}
