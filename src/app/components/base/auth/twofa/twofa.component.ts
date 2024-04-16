import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user/user.service";

@Component({
  selector: 'app-twofa',
  standalone: true,
  imports: [],
  templateUrl: './twofa.component.html',


})
export class TwofaComponent {

  constructor(private router: Router, private userService: UserService) {
  }

  async processForm(): Promise<void> {
    this.userService.login();

    await this.router.navigate(['/user']);
  }
}
