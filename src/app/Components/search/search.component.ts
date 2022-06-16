import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
  
export class SearchComponent implements OnInit  {

  pageNo: any;
  movieName: any = "";

customSearch:any;


  constructor(private router: Router) {
   this.router.events.subscribe((event: Event) => {
       if (event instanceof NavigationEnd) {
         if (!this.router.url.includes('/searchquery/')) {
           this.customSearch= "";
         }
        }
    });

}

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
