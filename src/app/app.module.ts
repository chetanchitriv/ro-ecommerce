import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './my-account/login/login.component';
import { SignupComponent } from './my-account/signup/signup.component';
import { MainComponent } from './dashboard/main/main.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { TopNavComponent } from './dashboard/top-nav/top-nav.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { CouponsComponent } from './dashboard/coupons/coupons.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';

import { OurstaffComponent } from './dashboard/ourstaff/ourstaff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './web/checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { MyprofileComponent } from './dashboard/myprofile/myprofile.component';
import { MainDashboardComponent } from './web/main-dashboard/main-dashboard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AllbrandsComponent } from './allbrands/allbrands.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './dashboard/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    NavBarComponent,
    ProductsComponent,
    DashComponent,
    TopNavComponent,
    CustomerComponent,
    OrdersComponent,
    SettingComponent,
    CouponsComponent,
    CategoriesComponent,
   
    OurstaffComponent,
    CheckoutComponent,
    MyprofileComponent,
    MainDashboardComponent,
    ProductdetailsComponent,
    AllbrandsComponent,
    BlogsComponent,
    BlogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
