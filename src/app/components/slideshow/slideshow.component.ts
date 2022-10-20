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
  private swiper!: Swiper;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  onSlideNext(){
    this.swiper.slideNext();
  }

  onSlidePrevius(){
    this.swiper.slidePrev();
  }

}
