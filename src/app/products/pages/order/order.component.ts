import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';


@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public sortOrder: 'asc' | 'desc' = 'asc';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.yellow
    }
  ]

  public toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
