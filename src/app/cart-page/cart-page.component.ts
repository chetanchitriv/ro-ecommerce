import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
products:any =[];
allProducts:any =0;
totalItemNumber:number =0;
  constructor(private cartservice:CartService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
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

}
