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
  
  getQuery(query : string) {
    var headers = new HttpHeaders({
      'Authorization' : 'Bearer BQC5oJQQF4jXSDPa42XLDElxkI-mPS0m8YjLoweasLXSgNyiHHpuMYxoZt7uGBAbjbJO2MlyfnDBqmoC0K4'
    });
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });
  }
  getListReleases(){
   
    return this.getQuery("browse/new-releases?limit=6");
    // .subscribe( (data : any) => {
    //   this.album = data;
    //   console.log(data.albums.items);
    //   return this.album;
    // } );
    
  }
  getSearchArtist(artist)
  {
    return this.getQuery("search?q="+artist+"&type=artist&limit=7")
    .pipe( map(data =>  data['artists'].items  ) )
  }
}
