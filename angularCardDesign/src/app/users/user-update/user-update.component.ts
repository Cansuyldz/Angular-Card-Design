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
  selector: 'app-user-update',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent {
  url: string = 'https://jsonplaceholder.typicode.com/';
  userUpdateForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    private http: HttpClient,
  ) {
    console.log(this.data)
    this.userUpdateForm = this.fb.group({
      id: [this.data.user.id],
      name: [this.data.user.name || '', Validators.required],
      phone: [this.data.user.phone || '', Validators.required],
      username: [this.data.user.username || '', Validators.required],
    })
  }

  userUpdate() {
    var id = this.userUpdateForm.get('id')?.value
    this.http.put(this.url + 'users/' + id, this.userUpdateForm.value).subscribe(res => {
      if (res) {
        this.dialogRef.close(res);
      }
    })
  }
}
