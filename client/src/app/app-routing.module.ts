import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PacientComponent } from './pacient/pacient.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FindComponent } from './find/find.component';
import { InfoComponent } from './info/info.component';
import { ConsultsComponent } from './consults/consults.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CommentComponent } from './comment/comment.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'doctor/:id', component: DoctorComponent },
  { path: 'pacient', component: PacientComponent },
  { path: 'pacient/:id', component: PacientComponent },
  { path: 'find', component: FindComponent },
  { path: 'info/:id', component: InfoComponent },
  { path: 'consults/:id', component: ConsultsComponent },
  { path: 'reservation/:id', component: ReservationComponent },
  { path: 'results/:id', component: ResultsComponent },
  { path: 'comments', component: CommentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
