import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramOverviewComponent } from './program-overview/program-overview.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { CurrentStudentSpotlightComponent } from './studentspotlight/current-student-spotlight/current-student-spotlight.component';
import { AlumniSpotlightComponent } from './studentspotlight/alumni-spotlight/alumni-spotlight.component';
import { OurWorkComponent } from './our-work/our-work.component';

const appRoutes: Routes = [
  {path: '', component: ProgramOverviewComponent },
  {path: 'faculty', component: FacultyComponent },
  {path: 'curriculum', component: CurriculumComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'currentstudents', component: CurrentStudentSpotlightComponent },
  { path: 'alumni', component: AlumniSpotlightComponent },
  { path: 'ourwork', component: OurWorkComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProgramOverviewComponent,
    FacultyComponent,
    CurriculumComponent,
    FacilitiesComponent,
    CurrentStudentSpotlightComponent,
    AlumniSpotlightComponent,
    OurWorkComponent
      ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    }),
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
