import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ודא שזה מיובא
import { HttpClientModule } from '@angular/common/http';  // ודא שזה מיובא

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PageNotFounfComponent } from './components/page-not-founf/page-not-founf.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchJobComponent } from './components/search-job/search-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    PageNotFounfComponent,
    NavComponent,
    SearchJobComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
