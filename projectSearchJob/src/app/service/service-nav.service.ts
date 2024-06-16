import { Injectable } from '@angular/core';
import { User } from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class ServiceNavService {

  constructor() { }

  user:User = {
    "id": 0,
    "userName":"אפרת",
    "password":"ef392817",
    "jobField":"developer"
  }
  getUser(): User {
    return this.user;
}
}
