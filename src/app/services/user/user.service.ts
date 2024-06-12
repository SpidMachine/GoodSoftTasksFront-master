import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {MessageService} from "primeng/api";
import {Observable} from "rxjs";
import {User} from "../../domain/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  baseURL = "http://localhost:8080/users";

  isLoggedIn() {
    return this.getToken() !== null;
  }

  getToken() {
    return sessionStorage.getItem("jwt");
  }

  public save(data: User) {
    return this.http.post(`${this.baseURL}`, data);
  }

  public getUser(id: string | null): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  public put(id: number, data: User) {
    return this.http.put<User>(`${this.baseURL}/${id}`, data);
  }

  public delete(id: string | undefined): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
