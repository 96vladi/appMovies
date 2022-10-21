import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { BillboardResponse } from '../interfaces/bilboardResponse';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = "https://api.themoviedb.org/3";
  private bildboardPage = 1;
  constructor( private http: HttpClient) {  }

  get params(){
    return{
      api_key:`79e5465e8c869e1a61ece22e48aa78fb`,
      language: `en-US`,
      page: this.bildboardPage
    }
  }

  getBilboard() :Observable<BillboardResponse>{
    // return this.http.get<BillboardResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=79e5465e8c869e1a61ece22e48aa78fb&language=en-US&page=1");
    return this.http.get<BillboardResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      tap(() => {
        this.bildboardPage += 1;
      })
    );
  }
}
