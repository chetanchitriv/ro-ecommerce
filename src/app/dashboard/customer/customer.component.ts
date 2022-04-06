import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/shared/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 
  addCustomer:boolean=false;
  showCustomerTable:boolean=true;
  showAddbutton: boolean=false;
  showUpdatebutton: boolean=false;

CustomerForm:any = FormGroup;
  date = new Date()
  today: any;
  CustomersData: any=[];
  updateId: any;


  constructor(private formbuilder:FormBuilder, private customerservice:CustomersService) { }

  ngOnInit(): void {
    this.getAllCustomers()
    this.CustomerForm = this.formbuilder.group({
      cname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phone : ['', Validators.required],
      country : ['', Validators.required],
      totalOrder : ['', Validators.required],
      RegisterDate : [this.today,Validators.required]
    });

  }
getAllCustomers(){
this.customerservice.getCustomers().subscribe(res=>{
  this.CustomersData = res;
console.log(res, "gets");

})
}

postCustomersDetail(){
  console.log(this.CustomerForm.value, "post");
  
  this.customerservice.postCustomers(this.CustomerForm.value).subscribe(res=>{
    alert("Customer Added Successfully!");
    this.CustomerForm.reset();
   this.getAllCustomers()
  this.showTable()
  })
}
deleteCustomers(data:any){
  this.customerservice.deleteCustomers(data.id).subscribe(res=>{
    alert("Records Deleted Successfully!")
    
  this.getAllCustomers()
  this.showTable()
  })
}

onEdit(data:any){

  this.addCustomer=true;
  this.showCustomerTable=false;
  this.showAddbutton=false;
  this.showUpdatebutton=true;

  this.updateId=data.id

  this.CustomerForm.patchValue(data)
}
updateCustomerDetails(){
  this.customerservice.updateCustomers(this.CustomerForm.value, this.updateId).subscribe((res:any)=>{
    alert("Records Updated Successfully!")
    
    this.getAllCustomers()
    this.showTable()
  })
}
showForm(){
  this.addCustomer=true;
  this.showCustomerTable=false;
  this.showAddbutton=true;
  this.showUpdatebutton=false;

}
showTable(){
  this.addCustomer=false;
  this.showCustomerTable=true;
  this.showAddbutton=false;
  this.showUpdatebutton=false;

}
showUpdateForm(){
  this.addCustomer=true;
  this.showCustomerTable=false;
  this.showAddbutton=false;
  this.showUpdatebutton=true;
}
}
