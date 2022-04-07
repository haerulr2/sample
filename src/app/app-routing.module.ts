import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MorePageComponent } from './pages/more-page/more-page.component';

const routes: Routes = [
	{ path: "", component: LayoutsComponent, children:[
		{ path: "", component: MainPageComponent },
		{ path: "more", component: MorePageComponent }
	] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
