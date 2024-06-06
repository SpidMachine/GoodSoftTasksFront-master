import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/User";

const BASE_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) {
  }

  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'sign-up', signRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'sign-in', loginRequest);
  }

  logout(): Observable<any> {
    return this.http.get(BASE_URL + 'logout')
  }
}
