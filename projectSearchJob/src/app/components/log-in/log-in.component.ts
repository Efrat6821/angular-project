import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(form: NgForm) {
    const { userName, password } = form.value;


    this.loginService.authenticate(userName, password).subscribe(
      res => {
        console.log(res);
        if (res) {
           localStorage.setItem('user', JSON.stringify(res));
        }
        this.errorMessage = 'שם משתמש או סיסמה שגויים. נסה שנית.';

       
      },
      (error) => {
        // console.error('Error during authentication:', error);
        this.errorMessage = 'שם משתמש או סיסמה שגויים. נסה שנית.';
      }
    );
    this.router.navigate(['/SearchJob']);
  }
}
