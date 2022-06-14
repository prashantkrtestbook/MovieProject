import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../../apicall.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieData: any;
  val: any = "tt0038399";
  pageNo: any;
  movieId: any;
  
  constructor(private apiservice:ApicallService,private _Activatedroute: ActivatedRoute) { }
  
Actors:string="";
Awards:string="";
BoxOffice:string="";
Country:string="";
DVD:string="";
Director:string="";
Genre:string="";
Language:string="";
Metascore:string="";
Plot:string="";
Poster:string="";
Production:string="";
Rated:string="";
Ratings:any=[];
Released:string="";
Response:string="";
Runtime:string="";
Title:string="";
Type:string="";
Website:string="";
Writer:string="";
Year:string="";
imdbID:string="";
imdbRating:string="";
imdbVotes:string="";






  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      let res = params;
      this.movieId = res.get('movieId')
  })
  
      this.apiservice.getMovieDetails(this.movieId).subscribe(res => {
        let response = res;
        this.setValue(response);
        // console.log(response)
      })
    
  }
setValue(resp: any) {

this.Actors=resp.Actors;
this.Awards=resp.Awards;
this.BoxOffice=resp.BoxOffice;
this.Country=resp.Country;
this.DVD=resp.DVD;
this.Director=resp.Director;
this.Genre=resp.Genre;
this.Language=resp.Language;
this.Metascore=resp.Metascore;
this.Plot=resp.Plot;
this.Poster=resp.Poster;
this.Production=resp.Production;
this.Rated=resp.Rated;
this.Ratings=resp.Ratings;
this.Released=resp.Released;
this.Response=resp.Response;
this.Runtime=resp.Runtime;
this.Title=resp.Title;
this.Type=resp.Type;
this.Website=resp.Website;
this.Writer=resp.Writer;
this.Year=resp.Year;
this.imdbID=resp.imdbID;
this.imdbRating=resp.imdbRating;
this.imdbVotes=resp.imdbVotes;   
}
  getUrl(): string
{
  return `url(${this.Poster})`;
}
}
