import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'code', component: CodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  SyllabusComponent,
  ScheduleComponent,
  NotesComponent,
  VideosComponent,
  CodeComponent,
];
