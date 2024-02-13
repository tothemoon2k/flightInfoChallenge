import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { FlightInfoPageComponent } from './flight-info-page/flight-info-page.component';
import { authenticationGuard } from './authentication.guard';
import { unauthenticationGuard } from './unauthenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: FlightInfoPageComponent,
    canActivate: [authenticationGuard],
  },

  {path: 'login', component: LoginPageComponent, canActivate: [unauthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
