import { Component } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(public userService: UserService, private router: Router) {
  }

  async logout(): Promise<void> {
    await this.userService.logout();
    await this.router.navigate(['/']);
  }
}
