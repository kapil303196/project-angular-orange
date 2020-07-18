import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeView(value) {
    console.log('value', value);
    if (value == 'webdesign') {
      this.router.navigate(['./web-design']);
    } else if (value == 'mobileappdevelopment') {
      this.router.navigate(['./mobile-app-development']);
    } else if (value == 'webdevelopment') {
      this.router.navigate(['./web-development']);
    } else if (value == 'iot') {
      this.router.navigate(['./iot']);
    } else if (!value) {
      this.router.navigate(['./not-found']);
    }
  }

}