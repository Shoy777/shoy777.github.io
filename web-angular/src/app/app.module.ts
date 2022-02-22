import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { TestComponent } from './pages/programming/test/test.component';
import { SectionHeaderComponent } from './sections/section-header/section-header.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { TestDetailComponent } from './pages/programming/test-detail/test-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutMeComponent,
    TestComponent,
    SectionHeaderComponent,
    LandingpageComponent,
    TestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
