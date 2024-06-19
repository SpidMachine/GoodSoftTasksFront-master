import {Component, OnInit} from '@angular/core';
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {WorkoutService} from "../../services/workout/workout.service";
import {Workout} from "../../domain/Workout";
import {CoachService} from "../../services/coach/coach.service";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {ImageModule} from "primeng/image";
import {InputMaskModule} from "primeng/inputmask";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {Coach} from "../../domain/Coach";
import {UserService} from "../../services/user/user.service";
import {User} from "../../domain/User";

@Component({
  selector: 'app-gym-section',
  standalone: true,
  imports: [
    PaginatorModule,
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ImageModule,
    InputMaskModule,
    ToastModule
  ],
  providers: [CoachService, MessageService],
  templateUrl: './gym-section.component.html',
  styleUrl: './gym-section.component.css'
})
export class GymSectionComponent implements OnInit {

  constructor(private router: Router,
              private coachesService: CoachService,
              private workoutService: WorkoutService,
              private messageService: MessageService,
              private userService: UserService
  ) {
  }

  coaches$!: any[];
  visible = false;
  userObj?: User;


  ngOnInit() {
    this.coachesService.getCoaches().subscribe(res => {
      this.coaches$ = res;
    })
    this.userService.getUser(sessionStorage.getItem("userId")).subscribe(res => {
      this.userObj = res;
    })
  }

  submitForm() {
    this.workoutService.saveWorkoutProfile(this.addWorkoutToProfileForm.value).subscribe(res => {
      this.visible = false;
      this.messageService.add({
        severity: 'info',
        summary: 'Успешно!',
        detail: 'Вы успешно записались на занятие! Оплатите его в своем профиле.',
        contentStyleClass: "pl-5"
      });
    })
  }

  userProfile() {
    this.router.navigate(['profile', sessionStorage.getItem("userId")]).then(r => r);
  }

  photoUrl?: string;
  coachName?: string;
  specialization?: string;
  description?: string;
  place?: string;

  addWorkoutToProfileForm: FormGroup = new FormGroup({
    coachId: new FormControl(),
    userGymId: new FormControl(),
    description: new FormControl(),
    status: new FormControl("Ждет оплаты"),
    timeRegistration: new FormControl(new Date())
  })

  public fillDialog(coachId: Coach, description: string, photoUrl: string, coachName: string, specialization: string, place: string) {
    this.visible = true;
    this.addWorkoutToProfileForm.get("coachId")?.setValue(coachId);
    this.addWorkoutToProfileForm.get("userGymId")?.setValue(this.userObj);
    this.addWorkoutToProfileForm.get("description")?.setValue(description);
    this.photoUrl = photoUrl;
    this.coachName = coachName;
    this.specialization = specialization;
    this.description = description;
    this.place = place;
  }

}
