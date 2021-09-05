import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(products: any, sort: string): any {
    if (sort === 'asc' || sort === 'desc') {
      products.sort((a: any,b: any) => {
        const diff = a.price - b.price;
        if (diff === 0) {
          return 0;
        }
        const sign = Math.abs(diff) / diff;

        return sort === 'asc' ? sign: -sign;
      })
    }
    return products;
  }

}
