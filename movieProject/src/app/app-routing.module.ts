import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },

  {
    path:'page/:movieName',
    component:MovieDetailsComponent
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
