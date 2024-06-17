import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Models/user';
import { ServiceNavService } from './service-nav.service';

@Injectable({
  providedIn: 'root'
})
export class UserConactService {

  constructor(private navSvc:ServiceNavService) { }
  user: User = this.navSvc.getUser();
  private userSubject = new BehaviorSubject<User>(this.user);
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }
}

