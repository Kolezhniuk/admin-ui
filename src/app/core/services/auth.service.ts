import {Injectable} from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) {
  }

  logout(): Observable<boolean> {
    return of(true)
  }

  login(payload: {
    userName: string;
    password: string;
  }): Observable<{ token: string, userId: number }> {
    return this.http.get<{ token: string, userId: number }>(`api/login`)

  }
}
