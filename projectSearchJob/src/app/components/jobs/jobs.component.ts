import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { error } from 'node:console';
import { User } from '../../Models/user';
import { UserConactService } from '../../services/user-conact.service';
import { Job } from '../../Models/job';
import { Router } from '@angular/router';
import { SortByAreaService } from '../../services/sort-by-area.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
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
  jobsOfField: Job[] = [];
  jobsOfFieldByArea: string[] = [];

  constructor(private jobsSvc: JobsService, private userConactSvc: UserConactService, private router: Router, private sortByAreaSvc: SortByAreaService) { }

  ngOnInit() {
    this.userConactSvc.user$.subscribe(user => {
      this.user = user;
    });

    if (this.user.id == 0) {
      this.router.navigate(['/login']);
    }
    this.jobsSvc.getAllJobs(this.user.jobSearchField).subscribe(
      data => {
        console.log(data);
        this.jobsOfField = data;
        for (let i = 0; i < this.jobsOfField.length; i++) {
          const currentJob = this.jobsOfField[i];
          const currentJobArea = this.jobsOfFieldByArea.find(j => j == currentJob.jobArea);
          if (!currentJobArea) {
            this.jobsOfFieldByArea.push(currentJob.jobArea);
          }
        }
        console.log(this.jobsOfFieldByArea);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

  sortByArea(e: Event) {
    const selectedArea = (e.target as HTMLSelectElement).value;
    if (selectedArea == "all")
      this.ngOnInit();
    else {
      this.sortByAreaSvc.sortByArea(selectedArea, this.user.jobSearchField).subscribe(
        data => {
          this.jobsOfField = data;
        },
        error => {
          console.error('Error:', error);
        }
      )
    }
  }

}
