import { Component } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private userService: UserService, private router: Router) {
    if (!this.userService.isUserLogged()) {
      this.router.navigate(['/auth/login']);
    }
  }

}
