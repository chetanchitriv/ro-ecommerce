import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
  
  addCategories:boolean=false;
  showCategoriesTable:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  showForm(){
    this.addCategories=true;
    this.showCategoriesTable=false;
  }
  showTable(){
    this.addCategories=false;
    this.showCategoriesTable=true;
  }
}
 



