import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];
  student: Student;
  editMode: String;

  constructor(private studentService: StudentService) { }

  ngOnInit() {

    this.getData();
    this.student = new Student;
    this.editMode = "none";

  }
  private getData() {
    this.studentService.getAll().subscribe(res => {
      console.log(res);
      this.students = res.data;
    });
  }

  private deletestudent(studentID) {
    this.studentService.delete(studentID).subscribe(res => {
      if (res.result === '1') {
        console.log('Del ok');
        this.getData();
        window.alert('ทำการลบเรียบร้อยแล้ว');
      }
      else {
        console.log('Del no');
      }
    });

  }

  private addStudent() {
    this.studentService.add(this.student).subscribe(res => {
      if (res.result === '1') {
        console.log('Add ok');
        this.student = new Student;
        this.getData();
        window.alert('บันทึกสำเร็จ');
        this.editMode = "none";
      }
      else {
        console.log('Add no');
      }
    });
  }

  private selectStudent(student) {
    this.student = student;
    this.editMode = 'edit';
  }

  private updateStudent() {
    this.studentService.update(this.student).subscribe(res => {
      if (res.result === '1') {
        console.log('Add ok');
        this.getData();
        window.alert('แก้ไขเรียบร้อย');
        this.editMode = "none";
      }
      else {
        console.log('Add no');
      }
    });
  }

  private newStudent() {
    this.editMode = 'none';
    this.student = new Student;
  }

  private comaddStudent() {
    this.editMode = 'Add';
    this.student = new Student;
  }


  private showStudent() {
    this.editMode = 'none';
  }

  private searchData(searchName) {
    this.studentService.searchName(searchName).subscribe(res => {
      if (res.result > 0) {
        this.students = res.data;
      }
      else {
        alert('ไม่พบข้อมูล');
      }
    });
  }


}
