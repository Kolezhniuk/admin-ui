import { AuthState } from 'src/app/pages/auth/state/auth.state';
import { NgxsModule } from '@ngxs/store';
import { AuthComponent } from './components/auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([AuthState]),
    AuthRoutingModule
  ]
})
export class AuthModule { }
