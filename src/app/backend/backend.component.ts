import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {
  products: any = [];
  filter = {
    s: '',
    sort: '',
    page: 1
  }

  lastPage = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.load(this.filter);
  }

  load( filter: any ): void {
    this.filter = filter;
    let params = new HttpParams();
    if (filter.s) {
      params = params.set('s', filter.s)
    }

    if (filter.sort) {
      params = params.set('sort', filter.sort)
    }

    if (filter.page) {
      params = params.set('page', filter.page.toString());
    }


    this.http.get('http://localhost:3000/api/products/backend', { params }).subscribe(
      (res: any) => {
        this.products = filter.page === 1 ? res.data : [...this.products, ...res.data];
        this.lastPage = res.lastPage;
      }
    );
  }

  setFilters(filter: any): void {
    this.load(filter);
  }

}
