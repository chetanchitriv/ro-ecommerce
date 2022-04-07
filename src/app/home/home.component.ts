import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../shared/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CategoriesForm: any=FormGroup;
  CategoriesData: any=[];
  filteredList:any=[];
  constructor(private formbuilder:FormBuilder, private categoriesservice:CategoriesService) { }

  ngOnInit(): void {
    this.CategoriesForm = this.formbuilder.group({
      //  categoriestype : ['', Validators.required],
       Category : ['', Validators.required],
        // publisheddate : ['', Validators.required, ],
        // visibilitystatus: ['', Validators.required],
        subcategories : ['', Validators.required]
        
      });

      this.getAllCategories();
     
  
    }
    getAllCategories() {
      this.categoriesservice.getcategories().subscribe(res=>{
        this.CategoriesData = res;
      
        console.log(res, "get"); 
      });
    }
   
}


