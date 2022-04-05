import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  dbUrl=environment.apiUrl

  constructor(private http:HttpClient) { }

  postcategories(data : any){
    return this.http.post<any>(this.dbUrl+"categories", data)
  }
  getcategories(){
    return this.http.get<any>(this.dbUrl+"categories")
  }
  updatecategories(data:any, id:number){
    return this.http.put<any>(this.dbUrl+`categories/`+`${id}`, data)
  }
  deletecategories(id:number){
    return this.http.delete<any>(this.dbUrl+`categories/`+`${id}`)
  }
}

