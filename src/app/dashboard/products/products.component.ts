import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  formValue: any = FormGroup;

  addProduct:boolean=false;
  showUserTable:boolean=true;
  formbuilder: any;

  constructor() { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({

      image: ['', Validators.required],
      sku: ['', Validators.required],
      title: ['', Validators.required],
      slug: ['', Validators.required],
      description: ['', Validators.required],
      parentcategory: ['', Validators.required],
      childcategory: ['', Validators.required],
      unit: ['', Validators.required],
      quantity: ['', Validators.required],
      saleprice: ['', Validators.required],
      tag: ['', Validators.required],

    })
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
