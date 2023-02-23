import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    WelcomePageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
