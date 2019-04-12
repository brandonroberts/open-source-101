import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../../shared/models';
import * as fromRoot from '../../shared/state';
import * as MovieActions from '../../actions/movie.actions';

@Component({
  selector: 'search-movies-page',
  template: `
    <search-movies-box (search)="onSearch($event)"></search-movies-box>

    <movies-list
      [movies]="movies$ | async"
      (favoriteMovie)="onFavoriteMovie($event)">
    </movies-list>
  `
})
export class SearchMoviesPageComponent {
  movies$ = this.store.select(fromRoot.selectMovies);

  constructor(private store: Store<fromRoot.State>) {}

  onSearch(searchTerm: string) {
    this.store.dispatch(MovieActions.moviesSearch({ searchTerm }));
  }

  onFavoriteMovie($event: Movie) {
    
  }
}
