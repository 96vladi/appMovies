import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillboardResponse } from '../interfaces/bilboardResponse';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) {  }
  getBilboard() :Observable<BillboardResponse>{
    return this.http.get<BillboardResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=79e5465e8c869e1a61ece22e48aa78fb&language=en-US&page=1");
  }
}
