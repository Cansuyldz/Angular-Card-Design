import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-comments-update',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './comments-update.component.html',
  styleUrl: './comments-update.component.scss'
})

export class CommentsUpdateComponent {
  url: string = 'https://jsonplaceholder.typicode.com/';
  commentsUpdateForm !: FormGroup

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data : any,
    public dialogRef: MatDialogRef<CommentsUpdateComponent>,
    private http: HttpClient,
  ) {
    console.log(this.data)
    this.commentsUpdateForm = this.fb.group({
      id: [this.data.comment.id],
      name: [this.data.comment.name || '', Validators.required],
      email: [this.data.comment.email || '', Validators.email],
      body: [this.data.comment.body || '', Validators.required],
    })
  }
  commentsUpdate() {
    var id = this.commentsUpdateForm.get('id')?.value
    this.http.put(this.url + 'users/' + id, this.commentsUpdateForm.value).subscribe(res => {
      if (res) {
        this.dialogRef.close(res);
      }
    })
  }
}
