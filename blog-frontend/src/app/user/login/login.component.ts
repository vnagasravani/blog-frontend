import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { Router } from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:String;
  public password:String;

  

  constructor(private appService:AppServiceService,private route:Router , private toaster : ToastrService) { }

  ngOnInit() {
  }

  public goToSignUp(){
    this.route.navigate(['/signup']);
    
  }

  public forgotPassword(){
    this.route.navigate(['/forgot'])
  }

  public resetPassword=()=>{
    if(!this.email){
      this.toaster.warning('enter email Id');
    }
    else{
        console.log('email',this.email);
        this.appService.forgotPassword(this.email).subscribe(
          data=>{
            console.log(data);
            if(data.status==200){
            this.toaster.success(data.message);
            setTimeout(()=>{
              this.forgotPassword();
            },2000);
          }
          else{
            this.toaster.error(data['message'])
          }
          },
          err=>{
            this.toaster.error('some error occured');
           console.log(err);

          }
        )
    }
  }//end resetPassword


  public signinFunction(){
    let data={
      email:this.email,
     password:this.password
 
   };

   if(this.email=='' || this.email == undefined )
   {
   this.toaster.warning('enter email address')
   }
   else if(this.password=='' || this.password == undefined )
   {
    this.toaster.warning('enter password');

   }
   else
   {
  
   this.appService.login(data).subscribe((data)=>{

     console.log(data);
     if(data.status == 200)
     {
     this.appService.setUserInfo(data.data);
     Cookie.set('AuthToken',data.data.authToken);
     Cookie.set('userId',data.data.userId);
     this.toaster.info('logged in succesfully');
     this.route.navigate(['/dashboard']);
     }
     else
     {
       this.toaster.error(data.message);
     }

   },
   (error)=>{
     console.log(error.message);
   })
  }
}// end signinFunction


}
