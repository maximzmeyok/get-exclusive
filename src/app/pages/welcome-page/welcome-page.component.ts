import { User } from './../../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public formSignIn!: FormGroup;
  public formSignUp!: FormGroup;
  public submitted: boolean = false;

  constructor() {}

  public ngOnInit(): void {
    this._initFormSignUp();
    this._initFormSignIn();
  }

  public signIn(): void {
    if (this.formSignIn.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = this.formSignIn.value;
    console.log(user);
    this.submitted = false;
  }

  public signUp(): void {
    if (this.formSignUp.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = this.formSignUp.value;
    console.log(user);
    this.submitted = false;
  }

  private _initFormSignUp(): void {
    this.formSignUp = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  private _initFormSignIn(): void {
    this.formSignIn = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
}
