import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogTitle, MatDialogActions, MatDialogClose, MatDialogContent, MatInputModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent {
  url: string = 'https://jsonplaceholder.typicode.com/';

  userFormAddGroup!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,
              public dialogRef: MatDialogRef<UserAddComponent>) {
    this.userFormAddGroup = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
    })
  }
  userAdd() {
    this.http.post(this.url + 'users/1/posts', this.userFormAddGroup.value).subscribe( (res:any) => {
      this.dialogRef.close(res);
    });
  }
}
