import { Component, Input, OnInit, input } from '@angular/core';
import { SendCVService } from '../../services/send-cv.service';
import { UserConactService } from '../../services/user-conact.service';
import { User } from '../../Models/user';
import { LoginService } from '../../services/login.service';
import { Job } from '../../Models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent implements OnInit {

  @Input() jobData: Job = {
    "id": 0,
    "company": "",
    "description": "",
    "filed": "",
    "jobArea": "",
    "jobName": "",
    "scopeOfPosition": ""
  };

  user: User = {
    "id": 0,
    "username": "",
    "password": "",
    "fullName": "",
    "email": "",
    "jobSearchField": "",
    "countSendCV": 0,
    "sendCVList": []
  };

  doShowJobDetais: boolean = false;
  doSendCV: boolean = false;
  isSendCV: boolean = false;

  timeLeft: number = 2;
  interval: any;

  constructor(private sendCVSvc: SendCVService, private userConactSvc: UserConactService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userConactSvc.user$.subscribe(user => {
      this.user = user;
    });

    if (this.user.sendCVList.includes(this.jobData.id)) {
      this.isSendCV = true;
    }
  }

  sendCV() {
    this.doSendCV = true;
    this.startTimer();
    this.sendCVSvc.updateCountSendCV(this.user.id).subscribe(

      data => {
        console.log(data);

      },
      error => {
        console.error('Error:', error);
      }
    );

    this.sendCVSvc.updateSendCV(this.user.id, this.jobData.id).subscribe(

      data => {
        console.log(data);

      },
      error => {
        console.error('Error:', error);
      }
    );

    this.loginService.authenticate(this.user.username, this.user.password).subscribe(
      data => {
        console.log('Success:', data);
        localStorage.setItem('user', JSON.stringify(data));
        this.userConactSvc.setUser(data);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  showJobDetails() {
    this.doShowJobDetais = true;
  }

  notShowJobDetails() {
    this.doShowJobDetais = false;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft);

      } else {
        clearInterval(this.interval);
        console.log('Timer ended');
        this.doSendCV = false;
        this.timeLeft = 2;
      }
    }, 1000);
  }

}
