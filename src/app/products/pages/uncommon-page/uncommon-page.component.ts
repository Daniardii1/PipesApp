import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})

export class UncommonPageComponent {

  //I18nSelectPipe
  public name: string = 'Daniel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': "men's",
    'female': "women's"
  };

  changeClient(): void {
    this.name = 'Ana' === this.name ? 'Daniel' : 'Ana';
    this.gender = 'female' === this.gender ? 'male' : 'female';
  }

  //I18nPluralPipe
  public customers: string[] = ['Daniel', 'Ana', 'Lucia', 'Pedro', 'Maria'];
  public customersMap = {
    '=0': 'no customers waiting.',
    '=1': 'one customer waiting.',
    'other': '# clients waiting.'
  };

  deleteCustomer(): void {
    this.customers.shift();
  }

  //KeyValuePipe
  public person = {
    name: 'Daniel',
    age: 26,
    address: 'Calle Ribera, 5'
  };

  //AsyncPipe
  public myObservableTimer: Observable<number> = interval(1000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data has arrived on the promise!');
    }, 3500);
  });
}
