import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
// import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  {
    path:'', 
    component: AppComponent,
    pathMatch:'full'
    
  },
  {
    path:'searchquery/:pageNo/:searchValue',
    component: AppComponent,
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
