import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApicallService } from '../../apicall.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  constructor(private apicall: ApicallService) { }

  @Input() res: any;
  @Input() page: any;
  
  title: any ;
  imdbId: any;
  bgURL: any;
  localBgURL: any = "/assets/images/imageNotFound.jpeg";
  
  ngOnInit(): void {

    this.title = this.res.Title;
    this.imdbId = this.res.imdbID
    
    
    this.bgURL = this.res.Poster != "N/A" ? this.res.Poster : this.localBgURL;
  }}
  
