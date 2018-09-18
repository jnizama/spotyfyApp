import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  Artists : any[];
  spotifyService : SpotifyService;
  constructor(spotifyService : SpotifyService ) { 
    this.spotifyService = spotifyService
  }

  ngOnInit() {
  }

  onKeyUpSearchText(e : string) {
    this.spotifyService.getSearchArtist(e)
    .subscribe ( (obj : any) => {
      this.Artists = obj;
      console.log(obj);
    })
  }
}
