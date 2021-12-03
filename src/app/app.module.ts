import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {CandidatesPageComponent} from "./components/candidates-page/candidates-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {HttpClientModule} from "@angular/common/http";
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule} from "@angular/forms";
import { DetailPageComponent } from './components/detail-page/detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CandidatesPageComponent,
    AboutPageComponent,
    SortPipe,
    FilterPipe,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
