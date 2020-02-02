import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
 this is called lazy loading in a path
 loadChildren: () => import('.albums/albums.module).then(m => m.AlbumsModule)
 This is the same as saying:
 import { AlbumsModule } from './albums/albums.module';
*/

const routes: Routes = [
  {
    path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
