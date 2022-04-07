import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorePageComponent } from './more-page.component';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    MorePageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MorePageModule { }
