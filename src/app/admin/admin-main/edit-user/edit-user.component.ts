import {Component, OnInit} from '@angular/core';
import {PaginatorModule} from "primeng/paginator";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  standalone: true,
    imports: [
        PaginatorModule,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute)
  {}

  userId: string | null = '';
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.userId = data.get('id');
      this.userService.getUser(this.userId).subscribe((res:any) => {
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

  onSubmit(id:number) {
    const obj = this.editUserForm.value;
    this.userService.put(id, obj).subscribe((res:any) => {
      this.toGoUserList();
    })
  }

  toGoUserList() {
    this.router.navigate(['admin'])
  }
}
