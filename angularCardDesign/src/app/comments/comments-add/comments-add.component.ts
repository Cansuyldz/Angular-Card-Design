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
  selector: 'app-comments-add',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogTitle, MatDialogActions, MatDialogClose, MatDialogContent, MatInputModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './comments-add.component.html',
  styleUrl: './comments-add.component.scss'
})
export class CommentsAddComponent {
  url: string = 'https://jsonplaceholder.typicode.com/';

  commentFormAddGroup!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,
              public dialogRef: MatDialogRef<CommentsAddComponent>) {
    this.commentFormAddGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      body: ['', Validators.required],
    })
  }
  commentAdd() {
    this.http.post(this.url + 'comments/1/posts', this.commentFormAddGroup.value).subscribe((res: any) => {
      this.dialogRef.close(res);
    });
  }
}
