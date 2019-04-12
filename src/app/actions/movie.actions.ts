import { createAction, props } from '@ngrx/store';
import { Movie } from '../shared/models';

export const moviesSearch = createAction(
  '[Movie Search Page] Search',
  props<{ searchTerm: string }>()
);

export const moviesSearchSuccess = createAction(
  '[Movie Search/API] Search Success', 
  props<{ movies: Movie[] }>()
);

export const moviesSearchFailure = createAction(
  '[Movie Search/API] Search Failure',
  props<{ error: string }>()
);

export type All = ReturnType<
  | typeof moviesSearch 
  | typeof moviesSearchSuccess 
  | typeof moviesSearchFailure
>;