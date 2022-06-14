import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CombinedComponent } from './Components/combined/combined.component';
import { GroupcardComponent } from './Components/groupcard/groupcard.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
// import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  {
    path:'', 
    component: CombinedComponent,
    pathMatch:'full'
    
  },
  {
    path:'searchquery/:pageNo/:searchValue',
    component: GroupcardComponent,
    pathMatch:'full'
  },
  {
    path:'moviedetails/:movieId',
    component: MovieDetailsComponent,
    pathMatch:'full'
  },
  {
    path: '**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
