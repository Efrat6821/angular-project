import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { PageNotFounfComponent } from './components/page-not-founf/page-not-founf.component'
import { JobsComponent } from './components/jobs/jobs.component'
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: LogInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'SearchJob', component: JobsComponent },
  { path: '**', component: PageNotFounfComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
