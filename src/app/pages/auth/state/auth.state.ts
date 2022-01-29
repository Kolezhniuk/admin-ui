import { AuthService } from '../services/auth.service';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";

export interface AuthStateModel {
  token: string | null;
  username: string | null;
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { username: string; password: string }) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    username: null
  }
})

@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(private authService: AuthService) {}

  @Action(Login)
  loginSuccess(ctx: StateContext<AuthStateModel>, action: Login) {
    ctx.patchState({
      token: 'string | null',
      username: 'string | null',
    })
    // console.log(action, ctx);
    // debugger

    
    // return this.authService.login(action.payload).pipe(
    //   tap((result: { token: string }) => {
    //     ctx.patchState({
    //       token: result.token,
    //       username: action.payload.username
    //     });
    //   })
    // );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState();
    return this.authService.logout(state.token).pipe(
      tap(() => {
        ctx.setState({
          token: null,
          username: null
        });
      })
    );
  }
}

