import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost/origo-api-rest/public/api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
      return this.http.get(`${baseUrl}/clientes`);
    }

    get(id: any): Observable<any> {
      return this.http.get(`${baseUrl}/cliente/${id}`);
    }

    create(data: any): Observable<any> {
      return this.http.post(`${baseUrl}/cliente`, data);
    }

    getEstados(): Observable<any>{
      return this.http.get(`${baseUrl}/getEstados`);
    }


    getMunicipios(id: any): Observable<any>{
      return this.http.get(`${baseUrl}/getMunicipios/${id}`);
    }


    getPlanos(): Observable<any>{
      return this.http.get(`${baseUrl}/planos`);
    }
    update(id:any, data:any): Observable<any> {
      return this.http.put(`${baseUrl}/cliente/${id}`, data);
    }

  delete(id: any): Observable<any> {
    console.log(id);
    return this.http.delete(`${baseUrl}/cliente/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }

}
