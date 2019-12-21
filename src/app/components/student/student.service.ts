import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  serverIP = 'http://localhost:3000';

  myheader = new HttpHeaders();

  constructor(private http: HttpClient) { 
    this.myheader.set('Content-Type' , 'application/x-www-form-urlencoded');
  }

  public getAll(): Observable<any> {
    return this.http.get(this.serverIP + '/student/list/');
  }

  public delete(studentID): Observable<any> {
    return this.http.get(this.serverIP + '/student/delID/id/' + studentID);
  }

  public add(student: Student):  Observable<any> {
    return this.http.post(this.serverIP + '/student/add/' , student, {headers: this.myheader});
  }

  public update(student: Student):  Observable<any> {
    return this.http.post(this.serverIP + '/student/update/' , student, {headers: this.myheader});
  }
  
  public searchName(studentFname: string):  Observable<any> {
    const studentData = {
      studentFname: studentFname
    }
    return this.http.post(this.serverIP + '/student/search/partname' , studentData, {headers: this.myheader});
  }


}
