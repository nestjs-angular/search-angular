import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {

  transform(products: any, s: string): any {
    return products.filter((p:any) => p.title.toLowerCase().indexOf(s.toLowerCase()) >= 0 ||
    p.description.toLowerCase().indexOf(s.toLowerCase()) >= 0);
  }

}
