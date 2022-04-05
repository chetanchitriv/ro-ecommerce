import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  
  dbUrl=environment.apiUrl

  constructor(private http:HttpClient) { }

  postCustomers(data : any){
    return this.http.post<any>(this.dbUrl+"customers", data)
  }
  getCustomers(){
    return this.http.get<any>(this.dbUrl+"customers")
  }
  updateCustomers(data:any, id:number){
    return this.http.put<any>(this.dbUrl+`customers/`+`${id}`, data)
  }
  deleteCustomers(id:number){
    return this.http.delete<any>(this.dbUrl+`customers/`+`${id}`)
  }
}
