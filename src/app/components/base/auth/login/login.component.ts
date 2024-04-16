import { Component } from '@angular/core';
import {routes} from "../../../../app.routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router) {}

  async processForm(): Promise<void> {
    await this.router.navigate(['/auth/2fa']);
  }

}
