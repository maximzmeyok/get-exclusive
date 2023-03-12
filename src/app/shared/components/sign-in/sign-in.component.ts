import { FirebaseApiService } from './../../firebase-api.service';
import { SignInData } from './../../interfaces';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  public form!: FormGroup;
  public submitted: boolean = false;

  constructor(
    private _firebaseApiService: FirebaseApiService,
    private _router: Router,
  ) {}

  public ngOnInit(): void {
    this._initForm();
  }

  public signIn(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: SignInData = this.form.value;

    this._firebaseApiService.signIn(user).subscribe({
      next: () => {
        this._router.navigate(['main', 'feed']);
      }
    });
    this.submitted = false;
  }

  private _initForm(): void {
    this.form = new FormGroup({
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
