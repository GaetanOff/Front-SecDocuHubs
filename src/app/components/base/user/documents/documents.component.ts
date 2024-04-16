import { Component } from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './documents.component.html'
})
export class DocumentsComponent {
  showModal = false;

  constructor(private userService: UserService, private router: Router) {
    if (!this.userService.isUserLogged()) {
      this.router.navigate(['/auth/login']);
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
