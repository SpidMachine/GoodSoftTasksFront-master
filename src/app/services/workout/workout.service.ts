import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../domain/User";
import {Workout} from "../../domain/Workout";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  baseURL = "http://localhost:8080/workouts";

  constructor(private http: HttpClient) { }

  public getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseURL}`);
  }

  public getWorkoutsByUserGymId(id: string | null): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseURL}/profile/${id}`);
  }

  public getWorkoutsByCoachId(id: string | null): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${this.baseURL}/coach/${id}`);
  }

  public saveWorkoutProfile(data: string | null): Observable<Workout> {
    return this.http.post(`${this.baseURL}`, data);
  }

  public getWorkoutById(id: string | null) {
    return this.http.get<Workout>(`${this.baseURL}/${id}`);
  }

  public updateWorkout(id: string | null, data: Workout) {
    return this.http.put<Workout>(`${this.baseURL}/${id}`, data);
  }
}
