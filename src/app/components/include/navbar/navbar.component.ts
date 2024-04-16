import {Component} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {NavService} from "../../../services/nav/nav.service";

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
  isProfileDropdownOpen: boolean = false;
  isNotificationsOpen: boolean = false;
  isMessagesOpen: boolean = false;

  constructor(public userService: UserService, private router: Router, public navService: NavService) {
  }

  async logout(): Promise<void> {
    await this.userService.logout();
    await this.router.navigate(['/']);
  }

  async toggleProfileDropdown(): Promise<void> {
    this.isNotificationsOpen = false;
    this.isMessagesOpen = false;

    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  async toggleNotifications(): Promise<void> {
    this.isProfileDropdownOpen = false;
    this.isMessagesOpen = false;

    this.isNotificationsOpen = !this.isNotificationsOpen;
  }

  async toggleMessages(): Promise<void> {
    this.isProfileDropdownOpen = false;
    this.isNotificationsOpen = false;

    this.isMessagesOpen = !this.isMessagesOpen;
  }

  async clickProfileDropdown(where: number): Promise<void> {
    await this.closeAll();

    switch (where) {
      case 0:
        await this.router.navigate(['/user/settings']);
        break;
      default:
        await this.logout();
    }
  }

  private async closeAll(): Promise<void> {
    if (this.isProfileDropdownOpen) this.isProfileDropdownOpen = false;
    if (this.isNotificationsOpen) this.isNotificationsOpen = false;
    if (this.isMessagesOpen) this.isMessagesOpen = false;
  }

}
