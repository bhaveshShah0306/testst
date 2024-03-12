import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpResponseService } from './http-response.service';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
import { footerEmail } from './model/footerEmail.model';
const baseUrl='';
@Injectable({
  providedIn: 'root'
})

export class EmailService extends HttpResponseService{
  protected baseUrl = environment.backendAPIURL;
  constructor(private http:HttpClient,private router:Router ) { 
   super(http)}

  SaveEmail(data: footerEmail) {
   const token ="";

   const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     Authorization: `Bearer ${token}`,
   });
   var url = `${this.baseUrl}FooterEmail`
   return this.http.post<footerEmail>(`url`,data, { headers: headers })
   .pipe(
     map(res => {
       return this.formatHttpOkResponse<footerEmail>(res);
     }),
     catchError((err:HttpErrorResponse) => {
       return of(this.formatHttpErrorResponse(err));
     }),
   )
  }
}
