import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router) {
  }

  async processForm(): Promise<void> {
    await this.router.navigate(['/auth/2fa']);
  }

}
