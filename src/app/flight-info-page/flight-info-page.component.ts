import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-info-page',
  templateUrl: './flight-info-page.component.html',
  styleUrl: './flight-info-page.component.css'
})
export class FlightInfoPageComponent {
  airline: string = "";
  arrivalDate: string = "";
  arrivalTime: string = "";
  flightNumber: string = "";
  numberOfGuests: number = 1;
  isSubmitted: boolean = false;
  showErrorPopup: boolean = false;
  loading: boolean = false;
  showingSuccess: boolean = false;
  showingError: boolean = false;

  flightInfoForm = this.fb.group({
    airline: ['', Validators.required],
    arrivalDate: ['', Validators.required],
    arrivalTime: ['', Validators.required],
    flightNumber: ['', Validators.required],
    numOfGuests: ['1', Validators.required]
  });

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ){}

  onSubmit(): void {
    console.log('Form submitted');
    console.log(this.flightInfoForm.value);
    this.showErrorPopup = this.flightInfoForm.invalid;
    this.isSubmitted = true;

    if (this.flightInfoForm.invalid) return;

    console.log(this.flightInfoForm.value);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('token', 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh')
      .set('candidate', 'Justin Garner')

    console.log(headers)

    
    const body = new HttpParams()
      .set('airline', this.flightInfoForm.value.airline || "")
      .set('arrivalDate', this.flightInfoForm.value.arrivalDate || "")
      .set('arrivalTime', this.flightInfoForm.value.arrivalTime || "")
      .set('flightNumber', this.flightInfoForm.value.flightNumber || "")
      .set('numOfGuests', this.flightInfoForm.value.numOfGuests || "")
    
    console.log(body)

    this.loading = true;
    this.http.post('https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge',
      body.toString(),
      {
        headers: headers
      }
    ).subscribe(data => {
      console.log(data);
      this.loading = false;
      if(data = true) {
        this.showingSuccess = true;
      } else {
        this.showingError = false;
      }
    }
  );
  }

  closeSuccess(): void {
    this.showingSuccess = false;
  }

  closeError(): void {
    this.showingError = false;
  }

  logOut(): void {
    this.auth.signOut()
      .then(()=> {
        this.router.navigateByUrl('/login');
      })
  }
}
