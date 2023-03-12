import { FirebaseApiService } from './../../shared/firebase-api.service';
import { SignUpData } from './../../shared/interfaces';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent {
  public formSignUp!: FormGroup;
  public submitted: boolean = false;
  public isSignIn: boolean = true;

  public toggle(): void {
    this.isSignIn = !this.isSignIn;
  }
}
