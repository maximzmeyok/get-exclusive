import { SignUpData } from './../../interfaces';
import { FirebaseApiService } from './../../firebase-api.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  public form!: FormGroup;
  public submitted: boolean = false;

  constructor(
    private _firebaseApiService: FirebaseApiService,
  ) {}

  public ngOnInit(): void {
    this._initForm();
  }

  public signUp(): void {
    if (this.form.invalid) {
      return;
    }
    
    this.submitted = true;

    const user: SignUpData = this.form.value;
    
    this._firebaseApiService.signUp(user).subscribe();
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
