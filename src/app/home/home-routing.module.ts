import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
