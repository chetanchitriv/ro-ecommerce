import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
<<<<<<< HEAD
import { CategoriesComponent } from './dashboard/categories/categories.component';

=======
import { OurstaffComponent } from './dashboard/ourstaff/ourstaff.component';
>>>>>>> ecdf41e0147efcfb8b00bb2e107912091c0dea0f


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
<<<<<<< HEAD
    CategoriesComponent,
   
=======
    OurstaffComponent,
>>>>>>> ecdf41e0147efcfb8b00bb2e107912091c0dea0f
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
