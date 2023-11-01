import { Component } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css']
})
export class TopButtonComponent {
  top() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
