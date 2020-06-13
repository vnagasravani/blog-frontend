import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ArticleComponent } from './article/article/article.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { AddBlogComponent } from './article/add-blog/add-blog.component';




const routes: Routes = [
  {path:'signup' , component:SignupComponent ,pathMatch:'full'},
  {path:'login' , component:LoginComponent ,pathMatch:'full'},
  {path:'forgot' , component:ForgotPasswordComponent ,pathMatch:'full'},
  {path:'dashboard' , component:ArticleComponent ,pathMatch:'full'},
  {path:'create' , component:AddBlogComponent ,pathMatch:'full'},
  {path:'' , redirectTo:'login' , pathMatch:'full'} 
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
