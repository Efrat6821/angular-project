import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../services/login.service';
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
  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  onSubmit(form: NgForm) {
    const { userName, password } = form.value;
    console.log(userName);
    console.log(password);



    this.loginService.authenticate(userName, password).subscribe(
      data => {
        console.log('Success:', data);
        localStorage.setItem('user', JSON.stringify(data));
        this.submit.emit();
        this.router.navigate(['/SearchJob']);

      },
      error => {
        console.error('Error:', error);
        this.errorMessage = 'שם משתמש או סיסמה שגויים. נסה שנית.';
      }
    );
  }
}
