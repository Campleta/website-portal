import { Injectable } from '@angular/core';
import { 
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from './../authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn) return true;

    this.router.navigate(['/login']);
    return false;
  }

}