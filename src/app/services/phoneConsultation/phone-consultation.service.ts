import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../domain/User";
import {PhoneConsultation} from "../../domain/PhoneConsultation";

@Injectable({
  providedIn: 'root'
})
export class PhoneConsultationService {

  constructor(private http: HttpClient) {
  }

  baseURL = "http://localhost:8080/phoneCons";

  public getPhoneConsultationList(): Observable<PhoneConsultation[]> {
    return this.http.get<PhoneConsultation[]>(`${this.baseURL}`);
  }

  public save(data: PhoneConsultation) {
    return this.http.post(`${this.baseURL}/sign-up`, data);
  }
}
