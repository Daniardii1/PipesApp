import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})
export class BasicPagesComponent {

  public nameLower: string = 'daniel';
  public nameUpper: string = 'DANIEL';
  public fullName: string = 'dAnIeL CiFuEnTeS';

  public customDate: Date = new Date();
}
