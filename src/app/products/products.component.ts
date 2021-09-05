import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input('products') products: any = [];
  @Input('filter') filter: any;
  @Input('lastPage') lastPage!: number;
  @Output('setFilters') setFilters = new EventEmitter();

  search(s: string): void {
    this.setFilters.emit({
      ...this.filter,
      s,
      page: 1
    })
  }

  sort(sort: string): void {
    this.setFilters.emit({
      ...this.filter,
      sort,
      page: 1
    })
  }

  loadMore():void {
    this.setFilters.emit({
      ...this.filter,
      page: this.filter.page + 1
    })
  }

}
