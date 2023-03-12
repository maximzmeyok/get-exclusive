import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
