import {Component} from '@angular/core';
import {NavService} from "../../../services/nav/nav.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(private navService: NavService) {
    this.navService.setCurrentPage('about');
  }

}
