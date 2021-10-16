import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SignupComponent } from './components/signup/signup.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { VideosComponent } from './components/videos/videos.component';
import { LogInAuthGuard } from './guard/log-in-auth.guard';
import { LogInSignUpAuthGuard } from './guard/log-in-sign-up-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LogInAuthGuard] },
  {
    path: 'syllabus',
    component: SyllabusComponent,
    canActivate: [LogInAuthGuard],
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    canActivate: [LogInAuthGuard],
  },
  {
    path: 'notes',
    component: NotesComponent,
    canActivate: [LogInAuthGuard],
  },
  {
    path: 'videos',
    component: VideosComponent,
    canActivate: [LogInAuthGuard],
  },
  {
    path: 'code',
    component: CodeComponent,
    canActivate: [LogInAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogInSignUpAuthGuard],
  },
  {
    path: 'signUp',
    component: SignupComponent,
    canActivate: [LogInSignUpAuthGuard],
  },
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
  LoginComponent,
  SignupComponent,
];
