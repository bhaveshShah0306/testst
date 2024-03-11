import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl='';
@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor(private http:HttpClient) { }

  SaveEmail(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
