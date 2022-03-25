import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './dashboard/main/main.component';
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

{path:"home",component:HomeComponent},
{path:"main",component:MainComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
