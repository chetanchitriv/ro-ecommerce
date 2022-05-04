import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  //Now here i will define the POST GET PUT DELETE

  //Create restaurent using post method
postBlog(data:any){
    return this._http.post<any>("http://localhost:3000/blog/",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //GET restaurent data using get method
getBlog(){
  return this._http.get<any>("http://localhost:3000/blog/").pipe(map((res:any)=>{
    return res;
  }))
}
//Update restaurant using PUT method
updateBlog(data:any, id:number){
  return this._http.put<any>("http://localhost:3000/blog/" +id,data).pipe(map((res:any)=>{
    return res;
  }))
}
//Delete restaurent using delete method
deleteBlog(id:number){
  return this._http.delete<any>("http://localhost:3000/blog/"+id).pipe(map((res:any)=>{
    return res;
  }))
}

//This is done.....

}