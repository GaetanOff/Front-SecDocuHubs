import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(private router: Router) {}

  async processForm(): Promise<void> {
    await this.router.navigate(['/auth/login']);
  }

}
