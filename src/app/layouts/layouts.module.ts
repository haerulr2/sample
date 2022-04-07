import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
	declarations: [
		LayoutsComponent,
		HeaderComponent,
		FooterComponent,
		SidebarComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule
	]
})
export class LayoutsModule { }
