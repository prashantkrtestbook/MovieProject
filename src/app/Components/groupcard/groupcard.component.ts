import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../../apicall.service';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.scss']
})
export class GroupcardComponent implements OnInit {
  cardDatas: any;
  pageNo: any;
  totalLength: any;
  movieName: any;
  
  year1: any;
  yearCheck1: boolean = true;
  
  year2: any;
  yearCheck2: boolean=true;

  pager: any =[];
  pagedItems: any;

  movieNotFound: boolean = false;

 constructor(private apicall: ApicallService,private _Activatedroute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      let res = params;
      this.pageNo = res.get('pageNo');
      this.movieName = res.get('searchValue');
      if (this.pageNo && this.movieName) {
        this.updateAPI(this.pageNo, this.movieName)
      }
      
   })
  }


   updateAPI(pageNo:any,searchValue:any) {
    this.apicall.getData(searchValue,pageNo).subscribe((res:any) => {
      let response = res;
      if (res.Response == 'True') {
        if (this.movieNotFound) {
          this.movieNotFound=false
        }
        this.setValue(response) 
      }
      else {
        this.movieNotFound = true;
      }
    })
   }
  
   setValue(data: any) {
    this.cardDatas = data.Search;
    this.totalLength = data.totalResults;
    this.pager = this.getPager(this.totalLength, this.pageNo);
    
  }

  setPage(pageNo: number) {
    this.pager = this.getPager(this.totalLength, pageNo);
    this.pagedItems = this.cardDatas.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        let totalPages = Math.ceil(totalItems / pageSize);
        if (currentPage < 1) { 
            currentPage = 1; 
        } else if (currentPage > totalPages) { 
            currentPage = totalPages; 
        }
        
        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
   }

  
  
  filterChange(year1: any, year2: any) {
    if (year1) {
      this.year1 = year1[0] + year1[1] + year1[2] + year1[3];
      // console.log(typeof this.year1, typeof this.cardDatas[2].Year,this.year1<=this.cardDatas[2].Year)
      this.yearCheck1 = false;
    }
    if (year2) {
      this.year2 = year2[0] + year2[1] + year2[2] + year2[3];
      // console.log(typeof this.year2,typeof this.cardDatas[2].Year,this.year2>=this.cardDatas[2].Year)
      this.yearCheck2 = false;
    }
  }

  

}
