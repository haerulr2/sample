import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { MorePageModule } from './pages/more-page/more-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    MainPageModule,
    MorePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
