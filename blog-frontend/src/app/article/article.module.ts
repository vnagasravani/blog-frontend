import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import { ArticleComponent } from './article/article.component';
import { ToastrModule } from 'ngx-toastr';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ArticleComponent, AddBlogComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule
  ]
})
export class ArticleModule { }
