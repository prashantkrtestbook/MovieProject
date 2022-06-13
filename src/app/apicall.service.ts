import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  APIKEY = "27db1002"
  pageNo: any=1;
  constructor(private http: HttpClient) { }
  
  getData(movieName: any, pageNo?: 1) {
  console.log(movieName,pageNo)
    let url = `http://www.omdbapi.com/?s=${movieName}&page=${pageNo}&apikey=${this.APIKEY}`;
    return this.http.get(url);
  }
  getMovieDetails(movieId?: any) {
    let url = `http://www.omdbapi.com/?i=${movieId}&apikey=${this.APIKEY}`;
    return this.http.get(url);
  }
  // getDataaccordindtopage(movieName: any,pageNo:any) {
  //   let url = `http://www.omdbapi.com/?s=${movieName}&page=${pageNo}&apikey=${this.APIKEY}`;
  //   return this.http.get(url);
  // }
}