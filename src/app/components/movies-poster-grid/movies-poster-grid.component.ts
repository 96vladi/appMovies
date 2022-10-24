import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/bilboardResponse';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies!: Movie[];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.movies)
  }

}
