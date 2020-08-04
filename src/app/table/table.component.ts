import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  gitUrl = 'https://api.github.com/users/kapil303196/repos';
  constructor() { }

  ngOnInit(): void {
  }

}
