import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardData = [
    {
      image: '../../assets/website-design.png',
      title: 'Web Design',
      description: 'Web Design Services',
      linkText: 'Read More',
      redirecionPage: 'webdesign'
    },
    {
      image: '../../assets/app-development.png',
      title: 'Mobile App Development',
      description: 'Mobile App Development Services',
      linkText: 'Read More',
      redirecionPage: 'mobileappdevelopment'
    },
    {
      image: '../../assets/code.png',
      title: 'Web Development',
      description: 'Web Development Services',
      linkText: 'Read More',
      redirecionPage: 'webdevelopment'
    },
    {
      image: '../../assets/iot-card.png',
      title: 'IOT',
      description: 'IOT Services',
      linkText: 'Read More',
      redirecionPage: 'iot'
    },
  ]
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