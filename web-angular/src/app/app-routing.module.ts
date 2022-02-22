import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//https://angular.io/tutorial/toh-pt5
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { PageNotfoundComponent } from './pages/errors/page-notfound/page-notfound.component';
import { TestComponent } from './pages/programming/test/test.component';
import { TestDetailComponent } from './pages/programming/test-detail/test-detail.component';

const routes: Routes =[
  {
    path: '',
    //redirectTo: 'index',
    pathMatch: 'full',
    component: LandingpageComponent
  },
  //{ path: 'section', component: SectionComponent },
  //Wild Card Route for 404 request
  { path: 'test', component: TestComponent },
  { path: 'test/:id', component: TestDetailComponent },
  { path: '**', pathMatch: 'full', component: PageNotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
