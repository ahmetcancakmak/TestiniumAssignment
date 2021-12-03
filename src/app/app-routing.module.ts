import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {CandidatesPageComponent} from "./components/candidates-page/candidates-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {DetailPageComponent} from "./components/detail-page/detail-page.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'candidates',
    component: CandidatesPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'data/detail/:id',
    component: DetailPageComponent
  },
  { path: '', redirectTo: 'home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
