import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
cardDataList:any=[];

ProductsData= new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  getProductData(){
    return this.ProductsData.asObservable();
  }

  setProduct(product:any){
    this.cardDataList.push(...product);
    this.ProductsData.next(product)
  }
  addToCart(product:any){
    this.cardDataList.push(product);
    this.ProductsData.next(this.cardDataList);
    this.getTotalAmount();
    console.log(this.cardDataList);
    
  }

  getTotalAmount():number{
    let grandTotal =0;
    this.cardDataList.map((a:any)=>{
      grandTotal += a.total;
    }) 
    return grandTotal
   }
   
   removeCartData(product:any){
     this.cardDataList.map((a:any, index:any)=>{
if(product.id === a.id){
  this.cardDataList.splice(index,1)
}
     })
     this.ProductsData.next(this.cardDataList)
   }
   removeAllCart(){
     this.cardDataList = []
     this.ProductsData.next(this.cardDataList)
   }
}
