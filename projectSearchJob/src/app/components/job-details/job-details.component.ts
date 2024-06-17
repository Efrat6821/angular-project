import { Component, Input } from '@angular/core';
import { Job } from '../../Models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  @Input() jobData: Job = { 
    "id": 0,
    "company": "",
    "description": "",
    "filed": "",
    "jobArea": "",
    "jobName": "",
    "scopeOfPosition": ""
  };
  
}
