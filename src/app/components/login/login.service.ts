import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  serverIP = 'http://localhost:3000/'

  myheader = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.myheader.set('Content-Type', 'application/x-www-form-urlencoded');
  }

  public login(studentEmail, studentPassword):  Observable<any> {
    const studentData = {
      studentEmail: studentEmail,
      studentPassword: studentPassword
    }
    return this.http.post(this.serverIP + 'student/login/' , studentData, {headers: this.myheader});
  }

}
