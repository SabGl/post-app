import { Component } from '@angular/core';
import {AuthUserService} from "../../../services/auth-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(private authService: AuthUserService, private router: Router) {
  }

  logout(event:Event) {
    event.preventDefault()
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
