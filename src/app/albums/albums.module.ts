import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { Routes, RouterModule } from '@angular/router';
import  { AlbumsRoutingModule } from './albums-routing.module';



@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
