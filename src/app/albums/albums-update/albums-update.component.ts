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
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-albums-update',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './albums-update.component.html',
  styleUrl: './albums-update.component.scss'
})
export class AlbumsUpdateComponent {
  url: string = 'https://jsonplaceholder.typicode.com/';
  albumUpdateForm!: FormGroup

  constructor(private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<AlbumsUpdateComponent>,
              private http: HttpClient,
              ) {
    console.log(data)
    this.albumUpdateForm = this.fb.group({
      id: [this.data.album.id],
      userId: [this.data.album.userId || '', Validators.required],
      title:[this.data.album.title || '', Validators.required]
    })
  }

  albumUpdate(){
    var id = this.albumUpdateForm.get('id')?.value
    this.http.put(this.url + 'albums/' + id, this.albumUpdateForm.value).subscribe(res => {
      if (res) {
        this.dialogRef.close(res);
      }
    })
  }
}
