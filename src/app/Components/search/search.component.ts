import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  pageNo: any;
  movieName: any = "";

  clickEvent(movieName?: any, pageNo: any = 1) {
    if (movieName) {
      this.pageNo = pageNo;
      this.movieName = movieName;
    }
    else {
      this.pageNo = "";
      this.movieName = "";
    }
  }
  
  ngOnInit(): void{
    
  }
}
