import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramOverviewComponent } from './program-overview/program-overview.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

const appRoutes: Routes = [
  {path: '', component: ProgramOverviewComponent },
  {path: 'faculty', component: FacultyComponent },
  {path: 'curriculum', component: CurriculumComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProgramOverviewComponent,
    FacultyComponent,
    CurriculumComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
