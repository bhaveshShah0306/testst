import { Injectable } from '@angular/core';
import { HttpResponseService } from './http-response.service';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { Membership } from './model/membership.model';

@Injectable({
  providedIn: 'root'
})
export class MembershipService extends HttpResponseService {
  protected baseUrl = environment.backendAPIURL;

  constructor(protected http: HttpClient, private router: Router) {
    super(http)
  }



  postdata(data: any): Observable<any> {
    const token = "";
    debugger;
    // Set up the headers with the bearer token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    var url = `${this.baseUrl}Becomeamembers`;
    return this.http.post<Membership>(url, data, { headers: headers })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<Membership>(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      )
  }
}
