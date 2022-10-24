import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/bilboardResponse';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies!: Movie[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.movies)
  }

  onMovieClick(movie: Movie){
    this.router.navigate(['/movie', movie.id]);
  }

}
