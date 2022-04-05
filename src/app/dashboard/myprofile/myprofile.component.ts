import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  myProfile:boolean=true;
  editProfile:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
showMyProfile(){
  this.myProfile=true;
  this.editProfile=false;
}
showEditProfile(){
  this.myProfile=false;
  this.editProfile=true;
}
}
