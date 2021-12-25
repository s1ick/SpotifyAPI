import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  nuevasCanciones: any[] = []
  constructor(private service: SpotifyService) { }

  ngOnInit(): void {
    this.service.getNewReleases().
      subscribe((data: any) => {
        console.log(data.albums.items);
        this.nuevasCanciones = data.albums.items;
      });
  }

}
