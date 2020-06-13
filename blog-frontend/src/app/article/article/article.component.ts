import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { Router } from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private appService : AppServiceService , private toastr : ToastrService , private router : Router) { }

  public blogs = [];
  public author : String
  public title  : String
  public description:String

  ngOnInit() {
    this.appService.getBlogs().subscribe(
      (result) =>{
         this.blogs = result.data;
         console.log(this.blogs);
      }
    );
  }


  public logout: any = () => {

    this.appService.logout()
      .subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
          console.log("logout called")
          Cookie.delete('AuthToken');
          Cookie.delete('userId');
          this.router.navigate(['/login']);

        } else {
          this.toastr.error(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.error('some error occured', err)


      });

  } // end logout



}
