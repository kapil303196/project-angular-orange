import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  searchText: any;
  videosList = [
    { id: 1, title: 'Angular', subtitle: 'Angular Floating Image', image: '../../assets/CarouselAngularFloating.png' },
    { id: 2, title: 'Training' , subtitle: 'Training Floating Image', image: '../../assets/CarouselTrainingFloating.png'},
    { id: 3, title: 'Cloud' , subtitle: 'Cloud Floating Image', image: '../../assets/CarouselCloudFloating.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
