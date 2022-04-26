import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../shared/categories.service';
import { ProductService } from '../shared/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  products:any =[];
allProducts:any =0;

  totalItemNumber:number =0;
  CategoriesForm: any=FormGroup;
  CategoriesData: any=[];
  filteredList:any=[];
 

  productForm: any=FormGroup;
  ProductsData: any=[];
  imageSrc: any;
  isImageLoading: boolean |any;

  constructor(private formbuilder:FormBuilder, private categoriesservice:CategoriesService, private productservice :ProductService, public _sanitizer: DomSanitizer, private cartservice:CartService) { }

  ngOnInit(): void {
    // add categries start//

    this.cartservice.getProductData().subscribe(res=>{
      this.totalItemNumber=res.length;
      console.log(this.cartservice.getProductData())
      
      

    })

    
    this.CategoriesForm = this.formbuilder.group({
        Category : ['', Validators.required],
        subcategories : ['', Validators.required]
      });
     
      this.getAllCategories();
      this. getAllProducts();

      this.cartservice.getProductData().subscribe(res=>{
        this.products=res;
        this.allProducts = this.cartservice.getTotalAmount();
      })
  
      this.cartservice.getProductData().subscribe(res=>{
        this.totalItemNumber=res.length;
      })
    }
      removeProduct(item:any){
        this.cartservice.removeCartData(item);
  
  }
  removeAllProduct(){
    this.cartservice.removeAllCart();
  }
     
  
       // add categries end//
       
       // add product start//
      //  this.getAllProducts();
      //  this.productForm = this.formbuilder.group({
   
      //    file: ['', Validators.required],
      //   //  sku: ['', Validators.required],
      //    title: ['', Validators.required],
      //    slug: ['', Validators.required],
      //   //  description: ['', Validators.required],
      //   //  parentcategory: ['', Validators.required],
      //   //  childcategory: ['', Validators.required],
      //   //  unit: ['', Validators.required],
      //   //  quantity: ['', Validators.required],
      //    saleprice: ['', Validators.required],
      //    discountprice: ['', Validators.required],
      //   //  tag: ['', Validators.required],
   
      //  });
       // add product end//

     
    
    sanitize(image:any){
     
      return this._sanitizer.bypassSecurityTrustUrl(image);
    }
  
   _arrayBufferToBase64( buffer:any ) {
     var binary = '';
     var bytes = new Uint8Array( buffer );
     var len = bytes.byteLength;
     for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
     }
    //  console.log(btoa( binary ))
     return window.btoa( binary );
    
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
this.ProductsData.forEach((a:any)=>{
  Object.assign(a,{quantity:1, total:a.saleprice})
})

          console.log(res, "get"); 
        });
      }
     // add product end//

     addtoCart(item:any){
this.cartservice.addToCart(item);
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


