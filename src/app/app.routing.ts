import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ListcountriesComponent } from './components/listcountries/listcountries.component';

const ROUTES : Routes = [
  { path: 'main', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'countries', component: ListcountriesComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
 ]


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],exports:[
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
