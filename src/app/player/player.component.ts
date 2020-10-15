import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  videoId: string;

  constructor(public route: ActivatedRoute) {
    this.videoId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
