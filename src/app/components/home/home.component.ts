import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listReleases: any = [];

  constructor( spotyfy : SpotifyService ) {
      spotyfy.getListReleases()
      .subscribe( (data : any) => {
          this.listReleases = data.albums.items;
          console.log(data.albums.items);
          //return this.album;
        } );;
      
   }

  ngOnInit() {
  }

}
