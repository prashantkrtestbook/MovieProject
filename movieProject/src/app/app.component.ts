import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  resData = []
  totalLength: any;
  page: any = 1;
  searchquery: string = "";
  // @Input() cardDatas: any;
  cardDatas: any;
  show=false;


  getResChildPar(data:any) {
    // this.resData = data
    
    this.resData = data.response.Search;
    this.totalLength = data.response.totalResults;
    this.searchquery = data.movieName;
    // console.log(data)
    // this.page = 1;
  }
  
  constructor() { }


  setpageres(data:any) {
    this.resData = data.Search;
    this.totalLength = data.totalResults;
    // this.searchquery = data.movieName;
    // console.log(data)
  }

  // (movieName: any,pageNo:number=1) {
  //   this.apicall.getData(movieName,pageNo).subscribe(res => {
  //     let response = res;
  //     this.getResChildPar.emit(response);
  //   })
  // }



  ngOnInit(): void {
  }

}

