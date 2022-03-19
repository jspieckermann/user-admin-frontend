import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  doDelete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

  doPost<T>(url: string, content?: string): Observable<T> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<T>(url, content, { headers });
  }

  doPut<T>(url: string, content: string): Observable<T> {
    console.log('LOG: ' + url);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put<T>(url, content, { headers });
  }

  doGet<T>(url: string, parameter?: Map<string, string>): Observable<T> {
    if (parameter == null) {
      return this.http.get<T>(url);
    } else {
      let params = new HttpParams();
      for (const entry of parameter.entries()) {
        params = params.set(entry[0], entry[1]);
      }
      return this.http.get<T>(url, { params });
    }
  }
}