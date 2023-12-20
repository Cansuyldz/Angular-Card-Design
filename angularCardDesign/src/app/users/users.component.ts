import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {UserModel} from "../model/users.model";
import {MatDialog} from "@angular/material/dialog";
import {UserAddComponent} from "./user-add/user-add.component";
import { UserUpdateComponent } from "./user-update/user-update.component";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  url: string = 'https://jsonplaceholder.typicode.com/';
  users!: UserModel[];
  private dialogRef: any;

  constructor(private http: HttpClient,public dialog: MatDialog) {

  }

  ngOnInit() {
    this.http.get<UserModel[]>(this.url + 'users').subscribe(users => {
      this.users = users;
    })
  }

  openDialog(): void {
    let ref = this.dialog.open(UserAddComponent, {
      width: '250px',
    });
    ref.afterClosed().subscribe(res => {
      if (res)  {
        this.users.push(res);
      }
    })
  }
  openUserUpdateDialog(user: UserModel, dialogRef: any = this.dialogRef) {
    let userUpdateDialog = this.dialog.open(UserUpdateComponent, {
      width: '250px',
      data: {
        user: user
      }
    });
    userUpdateDialog.afterClosed().subscribe((res: any) => {
      if (res) {
        this.users[res.id - 1] = res;
      }
    })
  }
  deleteUser(id: number, index: number) {
    this.http.delete(this.url + 'users/' + id).subscribe(res => {
      this.users.splice(index, 1)
    })
  }
}



