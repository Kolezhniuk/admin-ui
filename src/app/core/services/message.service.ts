import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from "../models/user";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private readonly snackBar: MatSnackBar) {

  }

  logout(token: string | null): Observable<boolean> {
    return of(true)
  }

  login(payload: {
    username: string;
    password: string;
  }): Observable<{ token: string }> {
    return of({token: 'secretToken', id: 1})
  }
}
