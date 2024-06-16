import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import {PageNotFounfComponent} from './components/page-not-founf/page-not-founf.component'
import { SearchJobComponent } from './components/search-job/search-job.component'

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  {path:'SearchJob', component:SearchJobComponent},
  { path: '**', component: PageNotFounfComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
