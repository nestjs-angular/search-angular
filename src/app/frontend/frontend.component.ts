import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {

  products = [];
  filter = {
    s: '',
    sort: '',
    page: 1
  }

  perPage = 9;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/products/frontend').subscribe(
      (products: any) => {
        this.products = products;
      }
    );
  }

  lastPage(products: any): number {
    return Math.ceil(products.length / this.perPage);
  }

}
