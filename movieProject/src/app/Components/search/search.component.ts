import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ApicallService } from '../../apicall.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  data = [];
  constructor(private apicall: ApicallService) { }
  
  @Output() getResChildPar: EventEmitter<any> = new EventEmitter();

  clickEvent(movieName: any,pageNo:number=1) {
    this.apicall.getData(movieName,pageNo).subscribe(res => {
      let response = res;
      this.getResChildPar.emit({response,movieName});
    })
  }
  
  
  // ngOnInit(): void{
  //   this.getResChildPar.emit(this.response);
  // }
  

}
