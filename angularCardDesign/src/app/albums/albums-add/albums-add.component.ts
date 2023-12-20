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
  selector: 'app-albums-add',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogTitle, MatDialogActions, MatDialogClose, MatDialogContent, MatInputModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './albums-add.component.html',
  styleUrl: './albums-add.component.scss'
})
export class AlbumsAddComponent {
  url: string = 'https://jsonplaceholder.typicode.com/';

  albumFormAddGroup!: FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient,
              public dialogref: MatDialogRef<AlbumsAddComponent>) {
    this.albumFormAddGroup = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
    })
  }
  albumAdd (){
    this.http.post(this.url + 'albums/1/posts', this.albumFormAddGroup.value).subscribe( (res:any) => {
      this.dialogref.close(res);
    })
  }
}
