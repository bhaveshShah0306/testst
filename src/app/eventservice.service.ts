import { Injectable } from '@angular/core';
import { HttpResponseService } from './http-response.service';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { charity } from './model/charity.model';
import { events } from './model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService  extends HttpResponseService{
  protected baseUrl = environment.backendAPIURL;

  constructor(protected http: HttpClient,private router:Router) {
    super(http)}

    getevents(): Observable<any>{
      const token ="";
debugger;
      // Set up the headers with the bearer token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      var url = `${this.baseUrl}Events`
      return this.http.get<events>(url, { headers: headers })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<events>(res);
        }),
        catchError((err:HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      )
     }
    geteventgallery(): Observable<any>{
      const token ="";
debugger;
      // Set up the headers with the bearer token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      var url = `${this.baseUrl}Eventgallerymedias`
      return this.http.get<events>(url, { headers: headers })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<events>(res);
        }),
        catchError((err:HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      )
     }
    geteventdetails(id:any): Observable<any>{
      const token ="";
debugger;
      // Set up the headers with the bearer token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      var url = `${this.baseUrl}eventdetails?enventId=${id}`
      return this.http.get<events>(url, { headers: headers })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<events>(res);
        }),
        catchError((err:HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      )
     }
}
