import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import { TwitterAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: string = "";
  password: string = "";

  showError: boolean = false;

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ){}

  logIn(): void {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(()=> {
        this.router.navigate(['/']);
      })
      .catch((err)=>{
        this.showError = true;
        this.email = "";
        this.password = "";

        setTimeout(() => {
          this.showError = false;
        }, 3000);

      })
  }

  googleLogIn(): void {
    this.auth.signInWithPopup(new GoogleAuthProvider())
      .then(googleResponse => {
        this.router.navigate(['/']);
        console.log(googleResponse);
      }).catch(err => {
        console.log(err);
      });
  }

  twitterLogIn(): void {
    this.auth.signInWithPopup(new TwitterAuthProvider())
      .then(googleResponse => {
        this.router.navigate(['/']);
        console.log(googleResponse);
      }).catch(err => {
        console.log(err);
      });
  }

  githubLogIn(): void {
    this.auth.signInWithPopup(new GithubAuthProvider())
      .then(googleResponse => {
        this.router.navigate(['/']);
        console.log(googleResponse);
      }).catch(err => {
        console.log(err);
      });
  }
}
