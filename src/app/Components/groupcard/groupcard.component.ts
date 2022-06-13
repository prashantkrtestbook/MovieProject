import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.scss']
})
export class GroupcardComponent implements OnInit {
  @Input() cardDatas: any;
  @Input() page: any;
  @Input() totalLength: any;
  @Input() movieName: string="";
  constructor() { }

  // setpageres(data:any) {
  //   this.cardDatas = data.Search;
  //   console.log(data)
  // }
  ngOnInit(): void {
    
  }

}
