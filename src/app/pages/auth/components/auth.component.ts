import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/pages/auth/state/auth.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() error: string | null = '';


  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;

        // don't use services to state
      this.store.dispatch(new Login({ username, password }));
    }
  }
}
