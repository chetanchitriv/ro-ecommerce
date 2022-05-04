import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/blog.service';
import { BlogData } from './blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  BlogDataModelObj: BlogData = new BlogData;
  allBlogData: any;

  imageUrl: string = "/assets/img/default-image.png";
  image: any = null;


  blogForm: any = FormGroup;
  BlogData: any=[];
  showUserTable:boolean=true;
  addBlog:boolean=false;
  showAddbutton: boolean=false;
  showUpdatebutton=false;


  showBlogTable:boolean=true;

  updateId: any;


  constructor(private formbuilder:FormBuilder, private api: ApiService){ }

  ngOnInit(): void {


    this.blogForm = this.formbuilder.group({
     
      image: ['',Validators.required],
      title: ['', Validators.required],  
      description: ['', Validators.required],
    
    });

    this.getAllData()

  }


    handleFileInput(file: FileList) {
    this.image = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.image);
  }


//Now subscribing our data which is mapped in services  
addBlogs() {

  this.BlogDataModelObj.image = this.blogForm.value.image;
  this.BlogDataModelObj.title = this.blogForm.value.title;
  this.BlogDataModelObj.description = this.blogForm.value.description;

  
  this.api.postBlog(this.BlogDataModelObj).subscribe(res => {
    console.log(res);
    alert("Blog Added Successfully");
    this.blogForm.reset();
    this.getAllData(); //When you post any data
  },
    err => {
      alert("Something went wrong");
    }
  )
}


   //Get all data
   getAllData() {
    this.api.getBlog().subscribe(res => {
      this.allBlogData = res;
    })
  }



 //Delete Records
 deleteBlog(data: any) {
  this.api.deleteBlog(data.id).subscribe(res => {
    alert("Deleted")
    this.getAllData(); //Quick refresh data
  })
}





onEdit(data: any) {


  this.addBlog=true;
  this.showBlogTable=false;
  this.showAddbutton=false;
  this.showUpdatebutton=true;

  this.updateId=data.id

  this.blogForm.patchValue(data)

}



updateBlogDetails(){
  this.api.updateBlog(this.blogForm.value, this.updateId).subscribe((res:any)=>{
    alert("Records Updated Successfully!")
    
    this.getAllData()
    this.showTable()
  })
}


// updateBlog() {

//   this.BlogDataModelObj.image = this.blogForm.value.image;
//   this.BlogDataModelObj.title = this.blogForm.value.title;
//   this.BlogDataModelObj.description = this.blogForm.value.description;

  
//   this.api.updateBlog(this.BlogDataModelObj, this.BlogDataModelObj.id).subscribe(res => {
//     alert("Blog Updated");
//     let ref = document.getElementById('clear');
//     ref?.click();

//     this.blogForm.reset();
//     this.getAllData(); //When you post any data
//   })

// }




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
 }





}



