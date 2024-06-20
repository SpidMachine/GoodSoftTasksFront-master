import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user/user.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../domain/User";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ImageModule} from "primeng/image";
import {InputMaskModule} from "primeng/inputmask";
import {ToastModule} from "primeng/toast";
import {CoachService} from "../services/coach/coach.service";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {MessageService} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {DatePipe} from "@angular/common";
import {WorkoutService} from "../services/workout/workout.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PaginatorModule,
    ReactiveFormsModule,
    TabViewModule,
    ButtonModule,
    DialogModule,
    ImageModule,
    InputMaskModule,
    ToastModule,
    ScrollPanelModule,
    RouterLink,
    InputTextModule,
    TableModule,
    DatePipe
  ],
  providers: [UserService, CoachService, MessageService, WorkoutService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coachService: CoachService,
    private messageService: MessageService,
    private workoutService: WorkoutService
  ) {
  }

  workouts$!: any[];
  searchValue: string | undefined;
  userId: string | null = '';
  userObj!: any;
  coaches?: any[];
  date: Date = new Date();
  activeIndex: number = 0;

  ngOnInit() {
    this.workoutService.getWorkoutsByUserGymId(sessionStorage.getItem("userId")).subscribe(res => {
      this.workouts$ = res;
    })
    this.userService.getUser(sessionStorage.getItem("userId")).subscribe(res => {
      this.userObj = res;
    })

    this.activatedRoute.paramMap.subscribe((data) => {
      this.userId = data.get('id');
      this.userService.getUser(this.userId).subscribe((res: any) => {
        this.editUserForm = new FormGroup({
          id: new FormControl(res.id),
          firstName: new FormControl(res.firstName),
          lastName: new FormControl(res.lastName),
          password: new FormControl(res.password),
          email: new FormControl(res.email),
          birthday: new FormControl(res.birthday),
          gender: new FormControl(res.gender),
          phoneNumber: new FormControl(res.phoneNumber)
        });
      });
    })
  }

  editUserForm: FormGroup = new FormGroup({
    id: new FormControl(1),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl('')
  })

  onSubmit(id: number) {
    const obj = this.editUserForm.value;
    this.userService.put(id, obj).subscribe((res: any) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Сохранение!',
        detail: 'Данные успешно сохранены',
        contentStyleClass: "pl-5"
      });
    })
  }

  paid(workoutId: string) {
    this.workoutService.getWorkoutById(workoutId).subscribe(res => {
      res.status = "Оплачено";
      this.workoutService.updateWorkout(workoutId, res).subscribe(res => {
        window.location.reload();
      });
    })
  }

  userProfile() {
    this.router.navigate(['profile', sessionStorage.getItem("userId")]).then(r => r);
  }

  inputStyles = {
    'background-color': '#333',
    'color': '#fff',
    'width': '100%',
    'padding': '1% 2%',
    'outline': '0',
    'font-size': '25px',
    'font-weight': 'bold',
    'border': '1px solid rgba(105, 105, 105, 0.397)',
    'border-radius': '10px',
  }
}
