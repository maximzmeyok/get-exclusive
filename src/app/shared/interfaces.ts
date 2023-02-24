export interface SignInData {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface SignInResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  displayName: string;
  registered: boolean;
}

export interface SignUpData {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface SignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

