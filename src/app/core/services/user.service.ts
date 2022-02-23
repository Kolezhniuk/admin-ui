import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) {
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`api/users/${id}`)
  }
}
