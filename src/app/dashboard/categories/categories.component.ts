import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
  
  addCategories:boolean=false;
  showCategoriesTable:boolean=true;
  showAddbutton: boolean=false;
  showUpdatebutton: boolean=false;

  CategoriesForm:any = FormGroup;
  date = new Date()
  today: any;
  CategoriesData: any=[];
  updateId: any;
  // allstatus: string[] = ['Published', 'Scheduled', 'Hidden'];
  // categoriestypes=[ "Laptop", "TV","Mobile","Gamming Accessories", "Cooler", "Cosmetics", "Watch"];
  subcategories=[ ]

  constructor(private formbuilder:FormBuilder, private categoriesservice:CategoriesService) { }

  ngOnInit(): void {
    this.getAllCategories()
    this.CategoriesForm = this.formbuilder.group({
    //  categoriestype : ['', Validators.required],
     Category : ['', Validators.required],
      // publisheddate : ['', Validators.required, ],
      // visibilitystatus: ['', Validators.required],
      subcategories : ['', Validators.required]
      
    });

  }
  getAllCategories() {
    this.categoriesservice.getcategories().subscribe(res=>{
      this.CategoriesData = res;
    
      console.log(res, "get"); 
    });
  }

  postCategoriesDetails(){
    console.log(this.CategoriesForm.value, "post");
    
    this.categoriesservice.postcategories(this.CategoriesForm.value).subscribe((res:any)=>{
      alert("Customer Added Successfully!");
      this.CategoriesForm.reset();
     this.getAllCategories()
    this.showTable()
    })
  }
  deleteCategories(data:any){
    this.categoriesservice.deletecategories(data.id).subscribe(res=>{
      alert("Records Deleted Successfully!")
      
    this.getAllCategories()
    this.showTable()
    })
  }
  
  onEdit(data:any){
  
    this.addCategories=true;
    this.showCategoriesTable=false;
    this.showAddbutton=false;
    this.showUpdatebutton=true;
  
    this.updateId=data.id
  
    this.CategoriesForm.patchValue(data)
  }
  updateCategoriesDetails(){
    this.categoriesservice.updatecategories(this.CategoriesForm.value, this.updateId).subscribe((res:any)=>{
      alert("Records Updated Successfully!")
      
      this.getAllCategories()
      this.showTable()
    })
  }
  showForm(){
    this.addCategories=true;
    this.showCategoriesTable=false;
    this.showAddbutton=true;
    this.showUpdatebutton=false;
  }
  showTable(){
    this.addCategories=false;
    this.showCategoriesTable=true;
    this.showAddbutton=false;
    this.showUpdatebutton=false;
  }
  showUpdateForm(){
    this.addCategories=true;
    this.showCategoriesTable=false;
    this.showAddbutton=false;
    this.showUpdatebutton=true;
  }

  
  }


 



