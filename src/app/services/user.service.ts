import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9090/user';

  constructor(private http: HttpService) { }

  public getUsers(): Observable<User[]> {
    return this.http.doGet(this.baseUrl);
  }

  public getUser(id: string): Observable<User> {
    return this.http.doGet(this.baseUrl + '/' + id);
  }

  public addUser(user: User): Observable<User> {
    return this.http.doPost(this.baseUrl, JSON.stringify(user));
  }

  public deleteUser(id: string): Observable<User> {
    return this.http.doDelete(this.baseUrl + '/' + id);
  }

  public updateUser(id: string, user: User): Observable<User> {
    return this.http.doPut(this.baseUrl + '/' + id, JSON.stringify(user));
  }

}
