import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogTitle, MatDialogActions, MatDialogClose, MatDialogContent, MatInputModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  url: string = 'https://jsonplaceholder.typicode.com/';

  userFormAddGroup!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient,
  public dialogRef: MatDialogRef<DialogComponent>) {
    this.userFormAddGroup = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
    })
  }

  userAdd() {
    this.http.post(this.url + 'users/1/posts', this.userFormAddGroup.value).subscribe(res => {
      if (res) {
        this.dialogRef.close(res);
      }
    })

  }
}
