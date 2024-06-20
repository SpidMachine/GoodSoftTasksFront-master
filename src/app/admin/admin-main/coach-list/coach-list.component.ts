import {Component, OnInit} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {CoachService} from "../../../services/coach/coach.service";
import {Coach} from "../../../domain/Coach";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-coach-list',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    RouterLink,
    SharedModule,
    TableModule,
    FormsModule,
    ImageModule
  ],
  providers: [CoachService],
  templateUrl: './coach-list.component.html',
  styleUrl: './coach-list.component.css'
})
export class CoachListComponent implements OnInit {
  constructor(private coachService: CoachService, private router: Router) {
  }

  coach$!: Coach[];
  searchValue: string | undefined;

  ngOnInit() {
    this.coachService.getCoaches().subscribe(res => {
      this.coach$ = res;
    })
  }

  deleteCoach(id: string) {
    this.coachService.deleteCoach(id).subscribe(res => {
      this.ngOnInit();
    })
  }

  editCoach(id?: string) {
    this.router.navigate(['admin/coaches/editCoach', id])
  }
}
