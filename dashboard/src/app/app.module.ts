import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IgxIconModule, IgxNavbarModule } from 'igniteui-angular';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { NotesComponent } from './components/notes/notes.component';
import { CodeComponent } from './components/code/code.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, NavbarComponent, ButtonComponent, HomeComponent, SyllabusComponent, ScheduleComponent, NotesComponent, CodeComponent, VideosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxIconModule,
    IgxNavbarModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
