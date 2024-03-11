import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponseService } from './http-response.service';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { contact } from './model/contact.model';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends HttpResponseService{
     protected baseUrl = environment.backendAPIURL;
  constructor(private http:HttpClient,private router:Router ) { 
  super(http)}
     SaveContactUsData(data: contact) {
      const token ="";

      // Set up the headers with the bearer token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      var url = `${this.baseUrl}ContactUs`
      return this.http.post<contact>(`url`,data, { headers: headers })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<contact>(res);
        }),
        catchError((err:HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      )
     }
}
