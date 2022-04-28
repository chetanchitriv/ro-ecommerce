import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './dashboard/coupons/coupons.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { MainComponent } from './dashboard/main/main.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { OurstaffComponent } from './dashboard/ourstaff/ourstaff.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './my-account/login/login.component';
import { SignupComponent } from './my-account/signup/signup.component';
import { CheckoutComponent } from './web/checkout/checkout.component';
import { MainDashboardComponent } from './web/main-dashboard/main-dashboard.component';
import { MyprofileComponent } from './dashboard/myprofile/myprofile.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AllbrandsComponent } from './allbrands/allbrands.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './dashboard/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
},


{ path: "allbrands", component:AllbrandsComponent},
{ path: "blogs", component:BlogsComponent},

// { path: "login", component: LoginComponent },
// { path: "signup", component: SignupComponent },
// { path: "checkout",component:CheckoutComponent},

{ path:"home",component:HomeComponent},

{ path: "productdetails/:_id", component:ProductdetailsComponent},


// {path:"dash",component:DashComponent},

// { path:"nav-bar",component:NavBarComponent},

{ path:"main", component:MainComponent ,
children:[
  { path:"",component:DashComponent },
  { path:"dash",component:DashComponent },
  { path:"products",component:ProductsComponent },
  { path: "categories",component:CategoriesComponent},
  { path: "customer",component:CustomerComponent},
  {path: "blog",component:BlogComponent},
  { path: "orders",component:OrdersComponent},
  { path: "setting", component:SettingComponent},
  { path: "coupons",component:CouponsComponent},
  { path: "ourstaff",component:OurstaffComponent},
  { path: "myprofile", component:MyprofileComponent},
 

  // { path: "categories",component:CategoriesComponent}
]
},

{ path:"main-dashboard", component:MainDashboardComponent ,
children:[
  { path: "checkout", component:CheckoutComponent },
  { path: "cartpage", component:CartPageComponent},
  { path: "allbrands", component:AllbrandsComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
]
}

// { path:"nav-bar",component:NavBarComponent},
// { path:"dash",component:DashComponent },
// { path:"products",component:ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
