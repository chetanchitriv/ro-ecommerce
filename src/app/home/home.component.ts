import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../shared/categories.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CategoriesForm: any=FormGroup;
  CategoriesData: any=[];
  filteredList:any=[];
 

  productForm: any=FormGroup;
  ProductsData: any=[];
  imageSrc: any;

  constructor(private formbuilder:FormBuilder, private categoriesservice:CategoriesService, private productservice :ProductService) { }

  ngOnInit(): void {
    // add categries start//
    this.CategoriesForm = this.formbuilder.group({
        Category : ['', Validators.required],
        subcategories : ['', Validators.required]
      });
      this.getAllCategories();
     
  
       // add categries end//
       
       // add product start//
      //  this.getAllProducts();
       this.productForm = this.formbuilder.group({
   
         file: ['', Validators.required],
        //  sku: ['', Validators.required],
         title: ['', Validators.required],
         slug: ['', Validators.required],
        //  description: ['', Validators.required],
        //  parentcategory: ['', Validators.required],
        //  childcategory: ['', Validators.required],
        //  unit: ['', Validators.required],
        //  quantity: ['', Validators.required],
         saleprice: ['', Validators.required],
         discountprice: ['', Validators.required],
        //  tag: ['', Validators.required],
   
       });
       // add product end//
     
    }
 

// add categries start//
    getAllCategories() {
      this.categoriesservice.getcategories().subscribe(res=>{
        this.CategoriesData = res;
      
        console.log(res, "get"); 
      });
    }
   

     // add categries end//

       // add product start//
     getAllProducts() {
      this.productservice.getProducts().subscribe(res=>{
        this.ProductsData = res;
      
        console.log(res, "get"); 
      });
    }
     // add product end//

     onFileChange(event:any) {
      const reader = new FileReader();
       
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
       
        reader.onload = () => {
      
          this.imageSrc = reader.result as string;
        
          this.productForm.patchValue({
            fileSource: reader.result
          });
      
        };
      
      }
    }
  }


