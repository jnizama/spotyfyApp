import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  album : any[] = []
  constructor( private http : HttpClient) { 
    this.http = http;
  }
  
  getListReleases(){
    var headers = new HttpHeaders({
      'Authorization' : 'Bearer BQABonfMXvV09RAFqSN6QfFid0dTP8Q4Y22B-IDk-tfGxodjOlgv4Gngu0tPwFzbUBW1Ew0RORdOHZZukUs'
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=6", { headers });
    // .subscribe( (data : any) => {
    //   this.album = data;
    //   console.log(data.albums.items);
    //   return this.album;
    // } );
    
  }
  getSearchArtist(artist)
  {
    var headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDWhmOGQNqnbEbC4N29j3qYi_4_fR6yiBeSE3HyfpOyB-wSoSiP8RQ5cafBEjOCZhdUCjVwIpd9J8oxcnU'
    });
    return this.http.get("https://api.spotify.com/v1/search?q="+artist+"&type=artist&limit=7", 
    { headers })
    .pipe( map(data =>  data['artists'].items  ) )
  }
}
