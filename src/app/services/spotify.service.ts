import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  
  constructor( private http : HttpClient) { 
    this.http = http;
  }
  
  getListMusic(){
    var headers = new HttpHeaders({
      'Authorization' : 'Bearer BQD-K6TYa6gbhU-ua2OMHieY54Gw8QMC5G2x0zyf06wO5JoYuxrXUAtMvrCWjG3I5iJjbPFjVwyD8Y-Tz2c'
    });
    this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=6", { headers })
    .subscribe(data => {
      console.log(data);
    } );
  }
}
