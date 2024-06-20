import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../../domain/Photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseUrl = "http://localhost:8080/photo"

  constructor(private http: HttpClient) { }

  getPhoto(): Observable<Photo> {
    return this.http.get<Photo>(this.baseUrl);
  }

  uploadPhoto(coachId: number, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', photo);
    return this.http.post(`${this.baseUrl}/${coachId}/photo`, formData);
  }
}
