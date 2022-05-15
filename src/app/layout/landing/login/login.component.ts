import { Component, OnInit } from '@angular/core';
import { NavigationHelper } from 'src/app/core/constants/navigation-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dashboardPath: string = '';

  constructor() {}

  ngOnInit(): void {
    this.dashboardPath = NavigationHelper.Dashboard;
  }
}
