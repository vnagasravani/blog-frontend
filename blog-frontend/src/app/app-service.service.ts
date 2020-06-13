import { Injectable } from '@angular/core';
import {HttpClientModule,HttpParams, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }
  private url ="/api";

  signUp(data):Observable<any>{
    const params = new HttpParams().
    set('firstName',data.firstName)
    .set('lastName',data.lastName)
    .set('email',data.email)
    .set('mobileNumber',data.mobileNumber)
    .set('password',data.password)
  
  
    return this.http.post(`${this.url}/signup`,params);

  }

  login(data):Observable<any>{
      const params = new HttpParams().
      set('email',data.email)
      .set('password',data.password);
      return this.http.post(this.url+'/login',params);

  }

  public logout(): Observable<any> {
    const params = new HttpParams()
    .set('authToken', Cookie.get('AuthToken'))
    .set('userId',Cookie.get('userId'))
     return this.http.post(`${this.url}/out`, params);

  } // end logout function


  public forgotPassword (email):Observable<any>{
    console.log('in app service0',email);
    const params = new HttpParams()
    .set('email',email);
    return this.http.post(this.url+'/resetpassword',params);
  }//end forgotPassword

  public resetPassword (rpassword , newpassword):Observable<any>{
    const params = new HttpParams()
    .set('recoveryPassword',rpassword)
    .set('password',newpassword);
    return this.http.post(this.url+'/updatepassword',params);
  }//end resetPassword


  public createBlog (data):Observable<any>{
    const params = new HttpParams()
    .set('title',data.title)
    .set('body',data.body)
    .set('author',data.author)
    .set('authToken',Cookie.get('AuthToken'))

    return this.http.post(this.url+'/article',params);
  }//end resetPassword

  public getBlogs() : Observable<any> {
    return this.http.get(this.url+'/article/');
  } 


  



  public getUserInfo(){
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public setUserInfo(data){
    localStorage.setItem('userInfo',JSON.stringify(data))
  }

}
