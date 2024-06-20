import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CoachService} from "../../../../services/coach/coach.service";
import {Coach} from "../../../../domain/Coach";

@Component({
  selector: 'app-coach-edit-list',
  standalone: true,
  imports: [
    DatePipe,
    PaginatorModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './coach-edit-list.component.html',
  styleUrl: './coach-edit-list.component.css'
})
export class CoachEditListComponent implements OnInit {

  constructor(private coachService: CoachService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  coachId: string | null = '';
  photos: string[] = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.coachId = data.get('id');
      this.coachService.getCoach(this.coachId).subscribe((res: any) => {
        this.editCoachForm = new FormGroup({
          id: new FormControl(res.id),
          name: new FormControl(res.name),
          phoneNumber: new FormControl(res.phoneNumber),
          email: new FormControl(res.email),
          description: new FormControl(res.description),
          place: new FormControl(res.place),
          specialization: new FormControl(res.specialization),
          photoUrl: new FormControl(res.photoUrl)
        });
      });
    })

    this.coachService.getCoaches().subscribe(res => {
      for (let photo of res) {
        if (photo.photoUrl != null) {
          this.photos.push(photo.photoUrl);
        }
      }
    })
  }

  editCoachForm: FormGroup = new FormGroup({
    id: new FormControl(1),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl(''),
    place: new FormControl(''),
    specialization: new FormControl(''),
    photoUrl: new FormControl('')
  })

  onSubmit(id: number) {
    const obj = this.editCoachForm.value;
    this.coachService.updateCoach(id, obj).subscribe((res: any) => {
      this.toGoCoachList();
    })
  }

  toGoCoachList() {
    this.router.navigate(['/admin/coaches'])
  }
}
