import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost/origo-api-rest/public/api';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(private http: HttpClient) { }

  getPlanos(): Observable<any>{
    return this.http.get(`${baseUrl}/planos`);
  }
}
