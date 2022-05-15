import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { LoginComponent } from './layout/landing/login/login.component';
import { SignUpComponent } from './layout/landing/sign-up/sign-up.component';
import { CartDetailsComponent } from './layout/main/cart-details/cart-details.component';
import { DashboardComponent } from './layout/main/dashboard/dashboard.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
    ],
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cart-details', component: CartDetailsComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'landing/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
