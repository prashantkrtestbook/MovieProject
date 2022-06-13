import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ApicallService } from '../../apicall.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  pageNo: any= 1;
  movieName: any = "Batman";

  constructor(private apicall: ApicallService) { }
  
  @Output() getResChildPar: EventEmitter<any> = new EventEmitter();

  clickEvent(movieName?:any,pageNo?:any) {
    this.apicall.getData(movieName,pageNo).subscribe(res => {
      let response = res;
      this.getResChildPar.emit({ response, movieName, pageNo });
      
    })
  }
  
  
  ngOnInit(): void{
    this.clickEvent(this.movieName,this.pageNo);
  }
}
