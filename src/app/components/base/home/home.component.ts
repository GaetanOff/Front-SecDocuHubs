import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavService} from "../../../services/nav/nav.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private navService: NavService) {
    this.navService.setCurrentPage('home');
  }

}
