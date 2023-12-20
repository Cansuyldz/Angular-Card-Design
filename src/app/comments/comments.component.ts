import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {CommentsModel} from "../model/comments.model";
import {MatDialog} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import { CommentsUpdateComponent } from "./comments-update/comments-update.component";
import { CommentsAddComponent } from "./comments-add/comments-add.component";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  url: string = 'https://jsonplaceholder.typicode.com/';
  comments!: CommentsModel[];
  private dialogRef: any;

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.http.get<CommentsModel[]>(this.url + 'comments').subscribe(comments => {
      this.comments = [];
      comments.filter(elementAt => {
        if (elementAt.id <= 15) {
          this.comments.push(elementAt)
        }
      })
    })
  }

  openCommentDialog() {
    let ref = this.dialog.open(CommentsAddComponent, {
      width: '250px',
    });
    ref.afterClosed().subscribe(res => {
      if (res)  {
        this.comments.push(res);
      }
    })
  }

  openCommentUpdateDialog(comment: CommentsModel, dialogRef: any = this.dialogRef) {
    let commentsUpdateDialog = this.dialog.open(CommentsUpdateComponent, {
      width: '260px',
      data: {
        comment: comment
      }
    });
    commentsUpdateDialog.afterClosed().subscribe((res: any) => {
      if (res) {
        this.comments[res.id - 1] = res;
      }
    })
  }
  deleteComments( id: number, index:number) {
    this.http.delete(this.url + 'comments/' + id).subscribe(res => {
      this.comments.splice(index, 1)
    })
  }
}
