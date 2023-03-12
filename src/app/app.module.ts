import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { FirebaseApiService } from './shared/firebase-api.service';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    WelcomePageComponent,
    PostPageComponent,
    MainPageComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    FirebaseApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
