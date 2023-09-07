import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-return-btn',
  templateUrl: './return-btn.component.html',
  styleUrls: ['./return-btn.component.css']
})
export class ReturnBtnComponent {

  constructor(
    private location: Location
  ) {}

  goBack() {
    this.location.back()
  }
}
