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

  public getUser(index: number): Observable<User> {
    return this.http.doGet(this.baseUrl + '/' + index);
  }

  public addUser(user: User): Observable<User> {
    return this.http.doPost(this.baseUrl, JSON.stringify(user));
  }

}
