import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe<T> implements PipeTransform {


  transform(items: T[], sortBy?: keyof T, sortOrder: 'asc' | 'desc' = 'asc'): T[] {

    if (!sortBy) return items;

    return items.sort((a, b) => {
      const compareResult = a[sortBy] > b[sortBy] ? 1 : -1;
      return sortOrder === 'asc' ? compareResult : -compareResult;
    });
  }
}
