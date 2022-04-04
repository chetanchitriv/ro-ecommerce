import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  addProduct:boolean=false;
  showUserTable:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

showForm(){
  this.addProduct=true;
  this.showUserTable=false;
}
showTable(){
  this.addProduct=false;
  this.showUserTable=true;
}
}
