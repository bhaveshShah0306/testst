import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpResponseService } from './http-response.service';
import { Router } from '@angular/router';
import { charity } from './model/charity.model';

@Injectable({
  providedIn: 'root'
})
export class CharityService extends HttpResponseService{
  protected baseUrl = environment.backendAPIURL;

  constructor(protected http: HttpClient,private router:Router) {
    super(http)}

    postcharity(data:charity){
      const token ="";

      // Set up the headers with the bearer token
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      var url = `${this.baseUrl}Application`
      return this.http.post<charity>(`url`,data, { headers: headers })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<charity>(res);
        }),
        catchError((err:HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      )
     }


}