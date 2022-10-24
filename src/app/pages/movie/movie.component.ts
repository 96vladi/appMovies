import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movieResponse';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie!: MovieResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params; 
    this.movieService.getMoviesDetails(id).subscribe(
      {
        next: (movie) => {
          console.log(movie)
          this.movie = movie;
        }
      }
    );
  }

  onReturn(){
    this.location.back();
  }

}
