import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApicallService } from '../../apicall.service';
// import {MovieDetailsComponent} from '../movie-details/movie-details.component'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  constructor(private apicall: ApicallService) { }

  // @Output() getMovieDetails: EventEmitter<any> = new EventEmitter();
  title = 'movie Project';
  
  @Input() res: any;
  @Input() page: any;

  // movieData: MovieDetailsComponent;
  
//   movieDetails(url:any) {
//     window.open(url, "_blank");
// }
    
}
  
