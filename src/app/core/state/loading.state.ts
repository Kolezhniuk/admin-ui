import {AuthService} from '../services/auth.service';
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {User} from "../models/user";
import {LoadingService} from "../services/loading.service";

export interface LoadingStateModel {
  loading: boolean;
}

const prefix = '[Loading]';

export class LoadingStart {
  static readonly type = `${prefix} Started`;
}

export class LoadingStop {
  static readonly type = `${prefix} Stopped`;
}

@State<LoadingStateModel>({
  name: 'loading',
  defaults: {
    loading: false
  }
})

@Injectable()
export class LoadingState {
  @Selector()
  static loading(state: LoadingStateModel): boolean{
    return state.loading;
  }

  @Action(LoadingStart)
  loginSuccess(ctx: StateContext<LoadingStateModel>) {
    ctx.setState({
      loading: true
    })
  }

  @Action(LoadingStop)
  logout(ctx: StateContext<LoadingStateModel>) {
    ctx.setState({
     loading: false
    });
  }
}

