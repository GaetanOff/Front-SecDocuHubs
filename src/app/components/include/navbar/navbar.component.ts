import {Component, ElementRef, ViewChild} from '@angular/core';
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
  constructor(public userService: UserService, private router: Router, public navService: NavService,
              private elementRef: ElementRef<HTMLElement>) {
    this.updateCurrentPage();

  }

  async logout(): Promise<void> {
    await this.userService.logout();
    await this.router.navigate(['/']);
  }

  updateCurrentPage(): void {
  }

}
