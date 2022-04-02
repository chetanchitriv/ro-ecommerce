import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './dashboard/coupons/coupons.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { MainComponent } from './dashboard/main/main.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { OurstaffComponent } from './dashboard/ourstaff/ourstaff.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './my-account/login/login.component';
import { SignupComponent } from './my-account/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
},
{ path: "login", component: LoginComponent },
{ path: "signup", component: SignupComponent },

{ path:"home",component:HomeComponent},
// {path:"dash",component:DashComponent},

// { path:"nav-bar",component:NavBarComponent},

{ path:"main", component:MainComponent ,
children:[
  { path:"",component:DashComponent },
  { path:"dash",component:DashComponent },
  { path:"products",component:ProductsComponent },
  { path: "customer",component:CustomerComponent},
  { path: "orders",component:OrdersComponent},
  { path: "setting", component:SettingComponent},
  { path: "coupons",component:CouponsComponent},
  { path: "ourstaff",component:OurstaffComponent}
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
