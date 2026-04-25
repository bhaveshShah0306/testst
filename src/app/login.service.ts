import { Injectable } from '@angular/core';
import { HttpResponseService } from './http-response.service';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends HttpResponseService{
  protected baseUrl = environment.backendAPIURL;
 constructor(private http:HttpClient,private router:Router ) { 
 super(http)}

 
  Authenticate(credentials:{username: string; password: string }) {
   

  //  const token ="";
  //  const headers = new HttpHeaders({
  //    'Content-Type': 'application/json',
  //    Authorization: `Bearer ${token}`,
  //  });
  var url = `${this.baseUrl}Login`
  return this.http.post(url, credentials)
   .pipe(
     map(res => {
       return this.formatHttpOkResponse<any>(res);
     }),
     catchError((err:HttpErrorResponse) => {
       return of(this.formatHttpErrorResponse(err));
     }),
    )
     }
}