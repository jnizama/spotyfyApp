import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listcountries',
  templateUrl: './listcountries.component.html'
})
export class ListcountriesComponent implements OnInit {

  Countries: any = [];
  constructor( httpClient : HttpClient ) {
    let url ='https://restcountries.eu/rest/v2/lang/es';
    httpClient.get(url).subscribe(
      paises => {
        this.Countries = paises;
        console.log(paises);
      }
    )
   }

  ngOnInit() {
  }

}
