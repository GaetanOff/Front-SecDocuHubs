import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [],
  templateUrl: './forget.component.html',
})
export class ForgetComponent {
  constructor(private router: Router, private userService: UserService) {
  }

  async processForm(): Promise<void> {
    await this.router.navigate(['/auth/login']);
  }
}
