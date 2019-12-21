import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private LoginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  private login(LoginEmail, LoginPassword) {
    this.LoginService.login(LoginEmail, LoginPassword).subscribe(res => {
      if (res.result > 0) {
       alert('OK');
       this.router.navigateByUrl('/student');
      }
      else {
        alert('NO');
      }
    });
  }

}
