import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SearchComponent } from './Components/search/search.component';
import { CardsComponent } from './Components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ApicallService } from './apicall.service';
import { GroupcardComponent } from './Components/groupcard/groupcard.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    CardsComponent,
    GroupcardComponent,
    MovieDetailsComponent,
    PaginationComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
