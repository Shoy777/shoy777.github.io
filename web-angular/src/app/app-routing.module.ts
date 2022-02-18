import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './pages/section/section.component';

const routes: Routes =[
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'section', component: SectionComponent },
  /*
  { path: 'index',                component: ComponentsComponent },
  { path: 'nucleoicons',          component: NucleoiconsComponent },
  { path: 'examples/landing',     component: LandingComponent },
  { path: 'examples/login',       component: LoginComponent },
  { path: 'examples/profile',     component: ProfileComponent }*/
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
