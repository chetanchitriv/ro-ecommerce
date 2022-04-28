import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogForm: any = FormGroup;
  BlogData: any=[];


  showUserTable:boolean=true;
  addBlog:boolean=false;
  showAddbutton: boolean=false;
  showUpdatebutton=false;


  showBlogTable:boolean=true;




  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {


    this.blogForm = this.formbuilder.group({
     
      image: ['',Validators.required],
      title: ['', Validators.required],  
      description: ['', Validators.required],
    
    });

  }

  showForm(){
    this.addBlog=true;
    this.showUserTable=false;
    this.showAddbutton=true;
    this.showUpdatebutton=false;
  }
  showTable(){
    this.addBlog=false;
    this.showUserTable=true;
    this.showAddbutton=false;
    this.showUpdatebutton=false;
  }
  submit(){
    console.log(this.blogForm.value);
    alert("successs")
;  }


deleteblog(data: any){

}
onEdit(data: any){
    
}
}
