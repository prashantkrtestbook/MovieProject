import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApicallService } from '../../apicall.service';
// import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

  
  
  
export class PaginationComponent implements OnInit {



  @Input() cardDatas: any;
  @Input() page: any;
  @Input() totalLength: any;
  @Input() movieName: string = "";

   constructor(private apicall: ApicallService) { }
  
  // @Output() getResChildPar: EventEmitter<any> = new EventEmitter();


  @Output() getpageres: EventEmitter<any> = new EventEmitter();
    allItems: any;
    pager: any =[];
    pagedItems: any;

    ngOnInit() {
      this.allItems = this.cardDatas;
      this.setPage(1);
    }
  
  
  setPage(page: number) {
      this.pager = this.getPager(this.totalLength, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // console.log(this.pager)


    this.apicall.getData(this.movieName,this.pager.currentPage).subscribe(res => {
      let response = res;

      this.getpageres.emit(response);
      // console.log(response)
    })

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
