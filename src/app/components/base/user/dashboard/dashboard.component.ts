import {Component} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router, RouterLink} from "@angular/router";
import {NavService} from "../../../../services/nav/nav.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private userService: UserService, private router: Router, private navService: NavService) {
    if (!this.userService.isUserLogged()) {
      this.router.navigate(['/auth/login']);
      return;
    }

    this.navService.setCurrentPage('dashboard');
  }

}
