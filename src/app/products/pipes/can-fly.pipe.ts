import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Fly' | 'Don\'t fly' {
    return value ? 'Fly' : "Don't fly";
  }

}
