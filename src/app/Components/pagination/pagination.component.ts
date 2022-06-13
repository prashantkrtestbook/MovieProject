import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../../apicall.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
  
export class PaginationComponent implements OnInit {

  constructor(private apicall: ApicallService,private _Activatedroute: ActivatedRoute) { }
  
  pageNo: any;
  searchItems: any;
  searchValue: any;
  totalLength: any;
  pager: any =[];
  pagedItems: any;
  
  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      let res = params;
      this.pageNo = res.get('pageNo');
      this.searchValue = res.get('searchValue');
      this.updateAPI(this.pageNo, this.searchValue)
    })
  
    // updateURL() {
    
    // }
  }
  updateAPI(pageNo:any,searchValue:any) {
    this.apicall.getData(searchValue,pageNo).subscribe(res => {
    let response = res;
      this.setValue(response);
    })
  }
  setValue(data: any) {
    this.searchItems = data.Search;
    this.totalLength = data.totalResults;
      this.setPage(this.pageNo);
    console.log(data);
  }
  
  setPage(pageNo: number) {
    this.pager = this.getPager(this.totalLength, pageNo);
    this.pagedItems = this.searchItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    
    console.log(this.pager.currentPage,pageNo);
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
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
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
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        // return object with all pager properties required by the view
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
    
}
