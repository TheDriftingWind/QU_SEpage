import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CarouselModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { CurrentStudentSpotlightComponent } from './studentspotlight/current-student-spotlight/current-student-spotlight.component';
import { AlumniSpotlightComponent } from './studentspotlight/alumni-spotlight/alumni-spotlight.component';
import { OurWorkComponent } from './our-work/our-work.component';

const appRoutes: Routes =[
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'currentstudents', component: CurrentStudentSpotlightComponent },
  { path: 'alumni', component: AlumniSpotlightComponent },
  { path: 'ourwork', component: OurWorkComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    CurrentStudentSpotlightComponent,
    AlumniSpotlightComponent,
    OurWorkComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    }),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
