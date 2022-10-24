import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/bilboardResponse';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  public text: String = '';
  public movies: Movie[] = [];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      {
        next: (params) => {
          this.text = params.text;
          this.moviesService.searchMovie(params.text).subscribe(
            {
              next: (response) => {
                this.movies = response;
                console.log(this.movies);
              }
            }
          )
        }
      }
    )
  }

}
