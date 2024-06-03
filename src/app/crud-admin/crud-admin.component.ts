import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-crud-admin',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton
  ],
  templateUrl: './crud-admin.component.html',
  styleUrl: './crud-admin.component.css'
})
export class CrudAdminComponent {

}
