import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './layout/landing/landing.component';
import { DashboardComponent } from './layout/main/dashboard/dashboard.component';
import { LoginComponent } from './layout/landing/login/login.component';
import { SignUpComponent } from './layout/landing/sign-up/sign-up.component';
import { MainComponent } from './layout/main/main.component';
import { CartDetailsComponent } from './layout/main/cart-details/cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    CartDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
