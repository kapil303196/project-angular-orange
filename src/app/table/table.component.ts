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
    this.http.get('https://api.github.com/users/kapil303196/repos').subscribe(data => {
      const newdata: any = data;
      this.dataSource = new MatTableDataSource(newdata);
      console.log('data', this.dataSource)
      if (this.dataSource) {
        this.pagingSort();
      }
    }
    );
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // ngAfterViewInit() {
  //   if (this.dataSource) {
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   }
  // }

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

  // getData() {
  //   this.http.get('https://api.github.com/users/kapil303196/repos').subscribe(data => {
  //     const newdata: any = data;
  //     this.dataSource = new MatTableDataSource(newdata);
  //     console.log('data', this.dataSource)
  //   }
  //   );
  // }

}
