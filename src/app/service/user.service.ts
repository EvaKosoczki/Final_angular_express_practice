import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) {

  }

  access(): void {
    this.http.get(this.url).subscribe(
      data => console.log(data)
    )
  }
  read(): Observable<any> {
    return this.http.get(this.url);
    // nem kell subscribe... ha van async pipe a html-ben | async
  }
  delete(id): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`)
  }

}
