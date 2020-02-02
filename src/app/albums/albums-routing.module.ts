import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: MusicComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
