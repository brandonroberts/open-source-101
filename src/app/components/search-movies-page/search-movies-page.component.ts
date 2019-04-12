import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../../shared/models';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'search-movies-page',
  template: `
    <search-movies-box (search)="onSearch($event)"></search-movies-box>

    <movies-list
      [movies]="movies"
      (favoriteMovie)="onFavoriteMovie($event)">
    </movies-list>
  `
})
export class SearchMoviesPageComponent {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  onSearch(searchTerm: string) {
    this.moviesService.findMovies(searchTerm)
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  onFavoriteMovie($event: Movie) {
    
  }
}
