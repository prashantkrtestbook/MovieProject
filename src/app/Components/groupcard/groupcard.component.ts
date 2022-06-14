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


  



 constructor(private apicall: ApicallService,private _Activatedroute: ActivatedRoute) { }
   
  
  
  
  
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      let res = params;
      this.pageNo = res.get('pageNo');
      this.movieName = res.get('searchValue');
      this.updateAPI(this.pageNo, this.movieName)
   })
  }


   updateAPI(pageNo:any,searchValue:any) {
    this.apicall.getData(searchValue,pageNo).subscribe((res:any) => {
      let response = res;
      if (res && res.Response === 'True') {
        this.setValue(response) 
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

  
  
  filterChange1(event: any, year: any) {
  
  const pattern = /[0-9]/;
  const inputChar = String.fromCharCode(event.charCode);
  let lIsTooLong: boolean = event.target.value.length > 3
  if (!pattern.test(inputChar) ||  lIsTooLong || event.target.value.length<0) {
    // invalid character, prevent input
    event.preventDefault();
    } 
    
    if (event.target.value.length == 4) {
      this.year1 = year;
      this.yearCheck1 = false;
    }
    
  }
  




  filterChange2(event: any, year: any) {
  
  const pattern = /[0-9]/;
  const inputChar = String.fromCharCode(event.charCode);
  let lIsTooLong: boolean = event.target.value.length > 3
  if (!pattern.test(inputChar) ||  lIsTooLong || event.target.value.length<0) {
    // invalid character, prevent input
    event.preventDefault();
    } 
    
    if (event.target.value.length == 4) {
      this.year2 = year;
      this.yearCheck2 = false;
    }
    
}

}
