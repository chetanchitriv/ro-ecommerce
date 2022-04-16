import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  dbUrl=environment.apiUrl

  constructor(private http:HttpClient) { }

  postProducts(data : any){
    return this.http.post<any>(this.dbUrl+"products", data)
  }
  
  getProducts(){
    return this.http.get<any>(this.dbUrl+"products")
  }
  updateProducts(data:any, id:number){
    return this.http.put<any>(this.dbUrl+`products/`+`${id}`, data)
  }
  deleteProducts(id:number){
    return this.http.delete<any>(this.dbUrl+`products/`+`${id}`)
  }
  
}
