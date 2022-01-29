import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { AuthStateModel } from "src/app/pages/auth/state/auth.state";

export interface AppModel {
    auth: AuthStateModel
}

@State<AppModel>({
    name: 'app',
    defaults: {
        auth: {} as AuthStateModel,
    }
})
@Injectable()
export class AppState {}
