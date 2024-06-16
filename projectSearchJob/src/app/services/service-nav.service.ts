import { Injectable } from '@angular/core';
import { User } from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class ServiceNavService {

  constructor() { }

  user: User = {
    "id": 0,
    "username": "",
    "password": "",
    "fullName": "",
    "email": "",
    "jobSearchField": ""
  };

  getUser(): User {
    try {
      const userJson = localStorage.getItem('user');
      if (userJson) {
        const parsedUser = JSON.parse(userJson) as User;
        this.user = parsedUser;
      }
    } catch (e) {
      console.error('Error accessing localStorage', e);
    }
    return this.user;
  }

}
