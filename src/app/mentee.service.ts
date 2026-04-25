import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environment/environment';
import { HttpResponseService } from './http-response.service';
import { Router } from '@angular/router';

import { MenteeRegistration } from './model/mentee.model';
import { HttpResponse } from './model/http.model';

@Injectable({
  providedIn: 'root'
})
export class MenteeService extends HttpResponseService {

  protected baseUrl = environment.backendAPIURL;
  
  // 'http://localhost:4000/api/'; 
  
  
  /* ******IMPORTANT********  
  
  change it before pushing to PROD*/
  

  constructor(protected http: HttpClient, private router: Router) {
    super(http);
  }

  registerMentee(data: MenteeRegistration): Observable<HttpResponse<any>> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = `${this.baseUrl}Mentor_Mentee/Mentee-registration`;

    return this.http.post<any>(url, data, { headers })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<any>(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }
}