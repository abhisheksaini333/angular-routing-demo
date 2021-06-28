import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = true;

  constructor() { }

  login() {
    // make an API call, get the response wether the user is valid or not
    // then set this variable isLoggedIn = true; else false;
  }

  checkIfUserLoggedIn() {
    return this.isLoggedIn;
  }
}
