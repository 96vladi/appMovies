import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/creditsResponse';
import { MovieResponse } from 'src/app/interfaces/movieResponse';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie!: MovieResponse;
  public cast!: Cast[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params; 
    this.movieService.getMoviesDetails(id).subscribe(
      {
        next: (movie) => {
          // console.log(movie)
          if(!movie){
            this.router.navigateByUrl('/home');
            return;
          }
          this.movie = movie;
        }
      }
    );

    this.movieService.getCast(id).subscribe(
      {
        next:(cast) => {
          console.log(cast);
          this.cast = cast;
        }
      }
    );
  }

  onReturn(){
    this.location.back();
  }

}
