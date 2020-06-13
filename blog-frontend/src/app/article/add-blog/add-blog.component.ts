import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  public title:String;
  public body:String;
  public author:String;
  

  constructor(private appService : AppServiceService , private router : Router , private toastr : ToastrService) { }

  ngOnInit() {
  }


  public createBlog(){
    let blogData={
      title:this.title,
      body:this.body,
      author:this.author
    };

    this.appService.createBlog(blogData).subscribe(
      (data)=>
      {
        if (data.status == 201)
        {
          console.log(data);
          this.toastr.info('blog created successfully');
          setTimeout(()=>{
            this.router.navigate(['/dashboard']) ;
          } , 2000);
        }
          if(data.status == 400)
          {
            console.log(data);
            this.toastr.info(data.message);
            setTimeout(()=>{
              this.router.navigate(['/dashboard']) ;
            } , 2000);
          }

      },
      (err)=>{
        this.toastr.info('Failed to create blog');
      }
    )
  }


}
