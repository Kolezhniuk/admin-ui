import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {

  }

  logout(token: string | null): Observable<boolean> {
    return of(true)
  }

  login(payload: {
    username: string;
    password: string;
  }): Observable<{ token: string }> {
    return of({token: 'ssds'})
  }
}
