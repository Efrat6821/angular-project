import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserConactService } from '../../services/user-conact.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{

  errorMessage: string = '';
  userConact:User = {
    "id": 0,
    "username": "",
    "password": "",
    "fullName": "",
    "email": "",
    "jobSearchField": "",
    "countSendCV":0,
    "sendCVList": []
  } ;
  constructor(private loginService: LoginService, private router: Router, private userConactSvc: UserConactService) { }
  ngOnInit(): void {
    this.userConactSvc.user$.subscribe(user => {
      this.userConact = user;
    });
  }
  logout(){
    localStorage.removeItem('user');
    this.userConactSvc.setUser( {
      "id": 0,
      "username": "",
      "password": "",
      "fullName": "",
      "email": "",
      "jobSearchField": "",
      "countSendCV":0,
      "sendCVList": []
    });
  }

  onSubmit(form: NgForm) {
    const { userName, password } = form.value;
    console.log(userName);
    console.log(password);



    this.loginService.authenticate(userName, password).subscribe(
      data => {
        console.log('Success:', data);
        localStorage.setItem('user', JSON.stringify(data));
        this.userConactSvc.setUser(data);
        this.router.navigate(['/SearchJob']);

      },
      error => {
        console.error('Error:', error);
        this.errorMessage = 'שם משתמש או סיסמה שגויים. נסה שנית.';
      }
    );
  }
 
}
