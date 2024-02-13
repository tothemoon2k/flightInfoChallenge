import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class authenticationGuard implements CanActivate {

  constructor(
    private auth: AngularFireAuth, 
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.auth.authState.pipe(map(user=>{
      if(user){
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
    }))
  }

}