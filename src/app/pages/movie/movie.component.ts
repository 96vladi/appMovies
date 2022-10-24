import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params; 
    this.movieService.getMoviesDetails(id).subscribe(
      {
        next: (movie) => {
          console.log(movie)
        }
      }
    );
  }

}
