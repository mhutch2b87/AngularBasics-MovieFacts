import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  albums;
  constructor(private albumServe: AlbumService) { }

  showAlbums(){
    this.albumServe.getAlbum().subscribe(data => {
      this.albums = data
    })
  }

  ngOnInit() {
  }

}
