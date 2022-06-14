import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApicallService } from '../../apicall.service';
// import {MovieDetailsComponent} from '../movie-details/movie-details.component'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  constructor(private apicall: ApicallService) { }

  @Input() res: any;
  @Input() page: any;

  title = 'movie Project';
  
  ngOnInit(): void {
    // console.log(this.res)
  }

  // @Output() getMovieDetails: EventEmitter<any> = new EventEmitter();
  
  
 



  // movieData: MovieDetailsComponent;
  
//   movieDetails(url:any) {
//     window.open(url, "_blank");
// }
    
}
  
