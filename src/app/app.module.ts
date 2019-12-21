import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './components/student/student.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    StudentService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
