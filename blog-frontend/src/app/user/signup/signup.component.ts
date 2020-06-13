import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstName: String;
  public lastName: String;
  public mobile:String;
  public email: String;
  public password: String;
  

  

 
  constructor(private appService:AppServiceService , private route:Router , private toaster : ToastrService) { }

  ngOnInit() {
  }

  public goToSignIn(){
    this.route.navigate(['/']);
  }
  

  public signupFunction=()=>{
    let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobile,
        email: this.email,
        password: this.password,
      }
     
  console.log(data);
      this.appService.signUp(data).subscribe(
        (dataa)=>{
          console.log(dataa);
          if(dataa.status == 200)
          {
          this.toaster.info('registration completed succesfully');
          setTimeout(()=>{this.route.navigate(['/login']);},2000);
          }
          else
          this.toaster.error(dataa.message);
        },
        (error)=>{
         this.toaster.error('some error occured')
          console.log("some error occured");
        }
      )
    }//end signupFunction

}
