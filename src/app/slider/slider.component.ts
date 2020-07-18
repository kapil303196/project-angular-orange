import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  screensdata: any;

  constructor() { }

  ngOnInit(): void {
    this.screensdata = [
      {
        'id': '1',
        'name': 'mobile',
        'background': '../../assets/bg10.jpg',
        'floater': '../../assets/Angular.png',
        'title': 'Angular 10 Development',
          'subtitle': `Angular is a platform for building mobile and desktop web applications.`,
        'link': ''
      },
      {
        'id': '2',
        'name': 'mobile',
        'background': '../../assets/bg11.jpg',
        'floater': '../../assets/Nodejs.png',
        'title': 'Node 12 Development',
          'subtitle': `Node.js is an open-source, cross-platform, JavaScript runtime environment
          that executes JavaScript code outside a web browser.`,
        'link': ''
      },
      {
        'id': '3',
        'name': 'mobile',
        'background': '../../assets/bg3.jpg',
        'floater': '../../assets/AwsCloud.png',
        'title': 'AWS Cloud Application Development',
          'subtitle': `The AWS Cloud Development Kit (AWS CDK) is an open source software
            development framework to model and provision your cloud application resources using familiar
            programming languages.`,
        'link': ''
      },
      {
        'id': '4',
        'name': 'mobile',
        'background': '../../assets/bg7.jpg',
        'floater': '../../assets/3.png',
        'title': 'Mobile and IoT Development',
            'subtitle': `IoT app development is the process of building IoT apps or software which
              combine sensor data with machine learning technologies and predictive analytics to create smart and
              proactive user experiences.`,
        'link': ''
      },
      {
        'id': '5',
        'name': 'mobile',
        'background': '../../assets/bg1.jpg',
        'floater': '../../assets/Training.png',
        'title': 'Training',
          'subtitle': `Training is teaching, or developing in oneself or others, any skills and
          knowledge or fitness that relate to specific useful competencies. Training has specific goals of
          improving one's capability, capacity, productivity and performance.`,
        'link': ''
      },
    ]
  }

}
