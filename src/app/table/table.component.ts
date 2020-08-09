import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'url'];
  newData: any = [];
  // dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // gitUrl = 'https://api.github.com/users/kapil303196/repos';
  
  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get('https://api.github.com/users/kapil303196/repos').subscribe(data => {
      this.newData = data;
      console.log('data', this.newData)
    } 
    );
    
  }
  // const ELEMENT_DATA: PeriodicElement[] = newData;
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(filterValue) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.newData.filter = filterValue;
  }

}
