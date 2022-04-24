import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = [
    {id: '1', name: 'ali', age: 33, designation:'officer' },
    {id: '2', name: 'ahmed', age: 22, designation: 'web developer'},
    {id: '3', name: 'raza', age: 43 , designation: 'admin'}
  ]

}