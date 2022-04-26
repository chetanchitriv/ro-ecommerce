import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  products:any =[];
allProducts:any =0;
totalItemNumber:number =0;

  constructor(private cartservice:CartService) { }

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
