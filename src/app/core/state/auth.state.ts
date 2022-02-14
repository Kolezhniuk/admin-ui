import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {User} from "../models/user";

export interface AuthStateModel {
  token: string | null;
  user: User | null;
}

const prefix = '[Auth]';

export class LoginSuccess {
  static readonly type = `${prefix} Login Success`;

  constructor(public payload: { token: string; user: User }) {
  }
}

export class LogoutSuccess {
  static readonly type = `${prefix} Logout Success`;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    user: null
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

  constructor() {
  }

  @Action(LoginSuccess)
  loginSuccess(ctx: StateContext<AuthStateModel>, action: LoginSuccess) {
    ctx.patchState(action.payload)
  }

  @Action(LogoutSuccess)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.setState({
      token: null,
      user: null
    });
  }
}

