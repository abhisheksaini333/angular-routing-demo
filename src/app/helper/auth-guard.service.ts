import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if user is loggedIn, return true else return false
    if (this._authenticationService.checkIfUserLoggedIn()) {
      return true;
    }
    this._router.navigate(['/login'])
    return false;
  }
}
