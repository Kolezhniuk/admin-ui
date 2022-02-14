import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/core/state/auth.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly store: Store, private readonly router: Router) {}

  canActivate() {
    const isAuthenticated = this.store.selectSnapshot(
      AuthState.isAuthenticated
    );

    if (!isAuthenticated){
      return this.router.parseUrl('/login');
    }

    return isAuthenticated
  }
}
