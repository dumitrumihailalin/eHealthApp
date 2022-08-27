import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PacientComponent } from './pacient/pacient.component';
import { SwitcherFormComponent } from './switcher-form/switcher-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { FindComponent } from './find/find.component';
import { ConsultsComponent } from './consults/consults.component';
import { CommentComponent } from './comment/comment.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DatePipe } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    DoctorComponent,
    PacientComponent,
    SwitcherFormComponent,
    RegisterComponent,
    MenuComponent,
    InfoComponent,
    FindComponent,
    ConsultsComponent,
    CommentComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
