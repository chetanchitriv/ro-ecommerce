import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id: any;
  data: any;

  constructor(private route:ActivatedRoute, private productservice:ProductService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['_id'];
    this.getOnePrduct()
  }

  getOnePrduct(){
this.productservice.getOne(this.id).subscribe((data)=>{
  console.log(data, "iddata");
  this.data=data;
  console.log(this.data);
  
})


  }


}
