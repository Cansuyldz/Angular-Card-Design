import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlbumsModel} from "../model/albums.model";
import {HttpClient} from "@angular/common/http";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { UserAddComponent } from "../users/user-add/user-add.component";
import { AlbumsAddComponent } from "./albums-add/albums-add.component";
import { MatTableModule } from "@angular/material/table";
import { AlbumsUpdateComponent } from "./albums-update/albums-update.component";

@Component({
  selector: 'app-albums',
  standalone: true,
    imports: [CommonModule, MatIconModule , MatTableModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit{
  url: string = 'https://jsonplaceholder.typicode.com/';
  albums!: AlbumsModel[];
  private dialogRef: any;
  constructor(private http:HttpClient , private dialog:MatDialog) {
  }

  ngOnInit() {
    this.http.get<AlbumsModel[]>(this.url + 'albums').subscribe(albums=> {
      this.albums = [];
      albums.filter(elementAt => {
        if (elementAt.id <= 15) {
          this.albums.push(elementAt)
        }
      })
    })
  }

  openDialog() {
    let ref = this.dialog.open(AlbumsAddComponent, {
      width: '250px',
    });
    ref.afterClosed().subscribe(res => {
      if (res)  {
        this.albums.push(res);
      }
    })
  }
  openUpdateAlbumDialog(album:AlbumsModel, dialogRef : any = this.dialogRef){
     let albumsUpdateDialog = this.dialog.open(AlbumsUpdateComponent, {
       width: '250px',
       data : {
         album : album
       }
     });
     albumsUpdateDialog.afterClosed().subscribe((res:any) => {
       if (res) {
         this.albums[res.id -1] = res;
       }
     })
  }
  deleteAlbum(id:number, index:number){
    this.http.delete(this.url + 'albums/' + id).subscribe( res =>{
      this.albums.splice(index,1)
    })
  }
}
