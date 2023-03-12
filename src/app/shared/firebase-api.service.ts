import { SignUpData, SignInData, SignUpResponse, SignInResponse } from './interfaces';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseApiService {
  private _accountsUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts';

  constructor(
    private _httpClient: HttpClient,
  ) {}

  public signIn(body: SignInData): Observable<SignInResponse> {
    const url: string = `${this._accountsUrl}:signInWithPassword?key=${environment.apiKey}`;
    body.returnSecureToken = true;
    
    return this._httpClient.post<SignInResponse>(url, body);
  }

  public signUp(body: SignUpData): Observable<SignUpResponse> {
    const url: string = `${this._accountsUrl}:signUp?key=${environment.apiKey}`;
    body.returnSecureToken = true;
    
    return this._httpClient.post<SignUpResponse>(url, body);
  }
}