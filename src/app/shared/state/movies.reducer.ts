import { Movie } from '../models';
import * as MovieActions from '../../actions/movie.actions';

export type State = Movie[];

export function reducer(state: State = [], action: MovieActions.All) {
  switch (action.type) {
    case MovieActions.moviesSearchSuccess.type: {
      return action.movies;
    }
    
    default: {
      return state;
    }
  }
}