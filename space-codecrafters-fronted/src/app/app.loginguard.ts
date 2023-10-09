import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppEndpoints } from './app.endpoints';

@Injectable()
export class LoginGuard implements CanActivate {

	constructor(private router:Router, private endpoint : AppEndpoints) {}

  	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
  		if(this.endpoint.get_session().valid){
  			if(this.endpoint.get_session().role == 1){
  				return true;
  			}
  			else if(this.endpoint.get_session().role == 2){
  				return true;
  			}
			  else{
				  return false;
			  }
  		}else{
  			this.endpoint.reset_session();
  			return false;
  		}
  	}
}
