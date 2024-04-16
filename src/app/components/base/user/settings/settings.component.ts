import {Component} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";
import {NavService} from "../../../../services/nav/nav.service";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  constructor(private userService: UserService, private router: Router, private navService: NavService) {
    if (!this.userService.isUserLogged()) {
      this.router.navigate(['/auth/login']);
      return;
    }

    this.navService.setCurrentPage('settings');
  }
}
