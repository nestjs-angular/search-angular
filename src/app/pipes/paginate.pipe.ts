import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
  pure: true
})
export class PaginatePipe implements PipeTransform {
  perPage = 9;

  transform(products: any, page: number): any {
    return products.slice(0, page * this.perPage);
  }

}
