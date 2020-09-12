import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface UserData {
  id: string;
  name: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'url'];
  // dataSource: any = [];
  dataSource: MatTableDataSource<UserData>;

  // dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient) {
    // this.getData();
  }

  ngOnInit(): void {
    this.getGithubData()
  }
  getGithubData() {
    this.http.get('https://api.github.com/users/soacs/repos').subscribe(data => {
      let newdata: any = data;
      console.log("data",data);
      let d = newdata.map((d, index) => {
        console.log("index",index)
        return {
          ...d,
          id: index + 1
        }
      })
      console.log("d",d)
      this.dataSource = new MatTableDataSource(d);
      console.log('data', this.dataSource)
      if (this.dataSource) {
        this.pagingSort();
      }
    }
    );
  }
  pagingSort() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
