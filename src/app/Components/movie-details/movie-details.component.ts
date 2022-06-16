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
  
actors:string="";
awards:string="";
boxOffice:string="";
country:string="";
DVD:string="";
director:string="";
genre:string="";
language:string="";
metascore:string="";
plot:string="";
poster:string="";
production:string="";
rated:string="";
ratings:any=[];
released:string="";
response:string="";
runtime:string="";
title:string="";
type:string="";
website:string="";
writer:string="";
year:string="";
imdbID:string="";
imdbRating:string="";
imdbVotes:string="";

localBgURL: any = "/assets/images/imageNotFound.jpeg";
bgURL: any;




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

this.actors=resp.Actors;
this.awards=resp.Awards;
this.boxOffice=resp.BoxOffice;
this.country=resp.Country;
this.DVD=resp.DVD;
this.director=resp.Director;
this.genre=resp.Genre;
this.language=resp.Language;
this.metascore=resp.Metascore;
this.plot=resp.Plot;
// this.Poster=resp.Poster;
this.production=resp.Production;
this.rated=resp.Rated;
this.ratings=resp.Ratings;
this.released=resp.Released;
this.response=resp.Response;
this.runtime=resp.Runtime;
this.title=resp.Title;
this.type=resp.Type;
this.website=resp.Website;
this.writer=resp.Writer;
this.year=resp.Year;
this.imdbID=resp.imdbID;
this.imdbRating=resp.imdbRating;
this.imdbVotes = resp.imdbVotes;   
this.bgURL = resp.Poster != "N/A" ? resp.Poster : this.localBgURL;
  
}
}
