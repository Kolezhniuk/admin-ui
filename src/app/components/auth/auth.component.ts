import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngxs/store';
import {LoginSuccess} from 'src/app/core/state/auth.state';
import {AuthService} from "../../core/services/auth.service";
import {UserService} from "../../core/services/user.service";
import {of, switchMap, take, tap} from "rxjs";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() error: string | null = '';


  constructor(
    private readonly store: Store,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
// login fail
  submit() {
    if (this.form.valid) {

      const {userName, password} = this.form.value;

      this.authService.login({userName, password}).pipe(
        take(1),
        switchMap(({userId, token}) => this.userService.getUser(userId).pipe(
          tap(user => {
              this.router.navigate(['/home']);
              this.store.dispatch(new LoginSuccess({token, user}));
            })
          )),
        catchError((err) => {
          // this.store.dispatch(new LoginFail(err));
          return of(err);
        })
        ).subscribe()
    }
  }
}
