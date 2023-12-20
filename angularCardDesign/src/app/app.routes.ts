import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {CommentsComponent} from "./comments/comments.component";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {AlbumsComponent} from "./albums/albums.component";

export const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'albums', component: AlbumsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'users', component: UsersComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutes {
}
