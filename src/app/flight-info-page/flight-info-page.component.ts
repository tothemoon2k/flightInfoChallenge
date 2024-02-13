import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-info-page',
  templateUrl: './flight-info-page.component.html',
  styleUrl: './flight-info-page.component.css'
})
export class FlightInfoPageComponent {
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ){}

  logOut(): void {
    this.auth.signOut()
      .then(()=> {
        this.router.navigateByUrl('/login');
      })
  }
}
