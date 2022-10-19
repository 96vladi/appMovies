import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from 'src/app/interfaces/bilboardResponse';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies!: Movie[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.movies)
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: true,
    });
  }

}
