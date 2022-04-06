import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productForm: any = FormGroup;

  updateId: any;
  ProductsData: any;
  imageSrc: any;

  addProduct:boolean=false;
  showUserTable:boolean=true;
  showAddbutton: boolean=false;
  showUpdatebutton: boolean=false;
 

  constructor(private formbuilder:FormBuilder, private productservice :ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.productForm = this.formbuilder.group({

      file: ['', Validators.required],
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

  getAllProducts() {
    this.productservice.getProducts().subscribe(res=>{
      this.ProductsData = res;
    
      console.log(res, "get"); 
    });
  }

  postProductsDetails(){
    console.log(this.productForm.value, "post");
    
    this.productservice.postProducts(this.productForm.value).subscribe((res:any)=>{
      alert("Product Added Successfully!");
      this.productForm.reset();
     this.getAllProducts()
    this.showTable()
    })
  }
  deleteProducts(data:any){
    this.productservice.deleteProducts(data.id).subscribe(res=>{
      alert("Records Deleted Successfully!")
      
    this.getAllProducts()
    this.showTable()
    })
  }
  onEdit(data:any){
  
    this.addProduct=true;
    this.showUserTable=false;
    this.showAddbutton=false;
    this.showUpdatebutton=true;
  
    this.updateId=data.id
  
    this.productForm.patchValue(data)
  }
  updateProductsDetails(){
    this.productservice.updateProducts(this.productForm.value, this.updateId).subscribe((res:any)=>{
      alert("Records Updated Successfully!")
      
      this.getAllProducts()
      this.showTable()
    })
  }

showForm(){
  this.addProduct=true;
  this.showUserTable=false;
  this.showAddbutton=true;
  this.showUpdatebutton=false;
}
showTable(){
  this.addProduct=false;
  this.showUserTable=true;
  this.showAddbutton=false;
  this.showUpdatebutton=false;
}

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
