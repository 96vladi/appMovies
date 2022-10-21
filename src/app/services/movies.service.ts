import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { BillboardResponse, Movie } from '../interfaces/bilboardResponse';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = "https://api.themoviedb.org/3";
  private bildboardPage = 1;
  public charging : Boolean = false;
  constructor( private http: HttpClient) {  }

  get params(){
    return{
      api_key:`79e5465e8c869e1a61ece22e48aa78fb`,
      language: `en-US`,
      page: this.bildboardPage
    }
  }

  getBilboard() :Observable<BillboardResponse>{
    // if(this.charging){
    //   //  return of([]);
    // }
    console.log("Cargando...")
    this.charging = true;
    // return this.http.get<BillboardResponse>("https://api.themoviedb.org/3/movie/now_playing?api_key=79e5465e8c869e1a61ece22e48aa78fb&language=en-US&page=1");
    return this.http.get<BillboardResponse>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      // map( (resp) => resp.results ,
      tap(() => {
        this.bildboardPage += 1;
        this.charging = false;
      })
    )
  }
}
