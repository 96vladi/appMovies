import { Component, OnInit, HostListener } from '@angular/core';
import { Movie } from 'src/app/interfaces/bilboardResponse';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if(pos > max){
      if(this.moviesService.charging){return;}
      this.moviesService.getBilboard().subscribe(
        {
          next: (res) => {
            this.movies.push(...res.results);
          }
        }
      );
    }
  }
  

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getBilboard()
    .subscribe(
      {
        next: (resp) => {
          // console.log(resp);
          this.movies = resp.results;
          this.moviesSlideshow = resp.results;
        }
      }
    )
  }

}
