import { Component } from '@angular/core';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.css']
})
export class HeaderLandingComponent {
  
  hidden = true;

  scrollsQuienes() {
    this.hidden = false;
    window.scrollTo(0, 600)
  }

  scrollsArgen() {
    window.scrollTo(0, 1100)
  }

  scrollsNos() {
    window.scrollTo(0, 1630)
  }

  scrollsOpc() {
    window.scrollTo(0, 2250)
  }
}
