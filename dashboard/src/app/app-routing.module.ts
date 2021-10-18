import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SignupComponent } from './components/signup/signup.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { VideosComponent } from './components/videos/videos.component';
import { LogInAuthGuard } from './guard/log-in-auth.guard';
import { LogInSignUpAuthGuard } from './guard/log-in-sign-up-auth.guard';
import { CheckloginGuard } from './guard/checklogin.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [LogInAuthGuard] },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CheckloginGuard]
  },
  {
    path: 'syllabus',
    component: SyllabusComponent,
    canActivate: [CheckloginGuard]

  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    canActivate: [CheckloginGuard]

  },
  {
    path: 'notes',
    component: NotesComponent,
    canActivate: [CheckloginGuard]

  },
  {
    path: 'videos',
    component: VideosComponent,
    canActivate: [CheckloginGuard]

  },
  {
    path: 'code',
    component: CodeComponent,
    canActivate: [CheckloginGuard]
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
