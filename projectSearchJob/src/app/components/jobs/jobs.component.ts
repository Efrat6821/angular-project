import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { error } from 'node:console';
import { User } from '../../Models/user';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {

  constructor(private jobsSvc: JobsService,private ) { }
  user: User ={
    "id": 0,
    "username": "",
    "password": "",
    "fullName": "",
    "email": "",
    "jobSearchField": ""
  }
  user = 
  ngOnInit() {
    this.jobsSvc.getAllJobs().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

}
