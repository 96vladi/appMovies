import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    SearchMovieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
