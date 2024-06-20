import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {InputMaskModule} from "primeng/inputmask";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {CoachService} from "../../../../services/coach/coach.service";
import {Coach} from "../../../../domain/Coach";

@Component({
  selector: 'app-coach-create-list',
  standalone: true,
    imports: [
        DatePipe,
        InputMaskModule,
        ReactiveFormsModule,
        RouterLink
    ],
  providers: [CoachService],
  templateUrl: './coach-create-list.component.html',
  styleUrl: './coach-create-list.component.css'
})
export class CoachCreateListComponent implements OnInit {

  constructor(private coachService: CoachService, private router: Router) {
  }

  photos: string[] = [];

  ngOnInit() {
    this.coachService.getCoaches().subscribe(res => {
      for (let photo of res) {
        if (photo.photoUrl != null) {
          this.photos.push(photo.photoUrl);
        }
      }
    })
  }

  createCoachForm: FormGroup = new FormGroup({
    id: new FormControl(1),
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl(''),
    place: new FormControl(''),
    specialization: new FormControl(''),
    photoUrl: new FormControl()
  })

  toGoCoachList() {
    this.router.navigate(['/admin/coaches'])
  }

  selectedFile: any;

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
  }

  onSubmit() {
    const obj: Coach = this.createCoachForm.value;
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile!!);
    reader.onload = () => {
      console.log(reader.result);
      const res = reader.result as string;
      // @ts-ignore
      obj.photoBase64 = reader.result.substr(reader.result.indexOf(',') + 1);
      this.coachService.save(obj).subscribe(res => {
        this.toGoCoachList();
      })
    };
  }
}
