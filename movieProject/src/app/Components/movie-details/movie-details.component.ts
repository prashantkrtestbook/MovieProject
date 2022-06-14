import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../apicall.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieData: any;
  val:any= "tt0038399";
  
  // constructor(private apicall: ApicallService) { 
  //   apicall.getMovieDetails(this.val).subscribe(res => {
  //     let response = res;
  //     console.log(response)
  //   })
  // }
  


  // getMovieDetails(data: any) {
  //   console.log(data)
  //   // this.movieData = data;
  // }
  ngOnInit(): void {
  }

}
