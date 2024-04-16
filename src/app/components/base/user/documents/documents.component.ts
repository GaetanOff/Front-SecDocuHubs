import { Component } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [],
  templateUrl: './documents.component.html'
})
export class DocumentsComponent {

  constructor(private userService: UserService, private router: Router) {
    if (!this.userService.isUserLogged()) {
      this.router.navigate(['/auth/login']);
    }
  }

}
