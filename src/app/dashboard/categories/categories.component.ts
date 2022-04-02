import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  showUserTable: boolean | false | undefined;
  addProduct: boolean | true | undefined;
  

  constructor() { }

  ngOnInit(): void {
  }
  
}
 



