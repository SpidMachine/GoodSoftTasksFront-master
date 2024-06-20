import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../domain/User";
import {Coach} from "../../domain/Coach";

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http: HttpClient) {
  }

  baseURL = "http://localhost:8080/coaches";

  public getCoaches(): Observable<Coach[]> {
    return this.http.get<Coach[]>(`${this.baseURL}`);
  }

  public getCoach(id: string | null): Observable<Coach> {
    return this.http.get<Coach>(`${this.baseURL}/${id}`)
  }

  public deleteCoach(id: string): Observable<Coach> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  public updateCoach(id: number, data: Coach): Observable<Coach> {
    return this.http.put<Coach>(`${this.baseURL}/${id}`, data);
  }

  public save(data: Coach): Observable<Coach> {
    return this.http.post(`${this.baseURL}/add`, data);
  }
}
