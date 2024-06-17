import { Component, OnInit } from '@angular/core';
import { ServiceNavService } from '../../services/service-nav.service';
import { UserConactService } from '../../services/user-conact.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  constructor(private NavService: ServiceNavService, private userConactSvc: UserConactService) { };
  u:User =  {
    "id": 0,
    "username": "",
    "password": "",
    "fullName": "",
    "email": "",
    "jobSearchField": "",
    "countSendCV":0,
    "sendCVList": []
  };
  ngOnInit() {
    this.userConactSvc.user$.subscribe(user => {
      this.u = user;
    });
  }
  // u = this.NavService.getUser();
  // g(e: boolean) {
  //   // if (e)
  //   console.log("gggggg");

  //   this.u = this.NavService.getUser();
  // }
  // add($event: string) {
  //   console.log($event);
  // }

}
