import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthUserService} from "../../../../services/auth-user.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit{

  isLoggedIn: boolean = false;

  constructor(private router:Router, private authService: AuthUserService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
