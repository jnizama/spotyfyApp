import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SliderComponent } from './components/shared/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ListcountriesComponent } from './components/listcountries/listcountries.component';
import { NoimagePipe } from './pipes/noimage.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    ArtistComponent,
    SearchComponent,
    ListcountriesComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
