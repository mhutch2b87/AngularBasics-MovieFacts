import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

    getAlbum(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
}
