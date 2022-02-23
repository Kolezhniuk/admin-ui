import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import { RequestFormComponent } from '../request/components/request-form/request-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [MaterialModule,
  ],
  exports: [MaterialModule],
  declarations: [
  ],
})
export class SharedModule {
}
